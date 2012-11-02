Ext.define("CrossView.controller.PostCtrl", {
	extend: "Ext.app.Controller",
	requires:[
	          'Ext.device.Camera',
	          'Ext.device.Connection',
	          'Ext.device.Notification',
	          'Ext.device.Orientation',
	          'Ext.Img'
	          ],
	config: {
		refs:{
			// Lookup views by xtype
			uploadView: "uploadpage",
			newPostView: "newpost"
		},
		
		control: {
			uploadView: {
				// Commands fired by the view UploadPage.js
				takePhotoCommand: "onTakePhotoCommand"
			},
			newPostView: {
				//Commands fired by the view NewPost.js
				cancelCommand:"onCancelCommand",
				postCommand:"onPostCommand"
			}
		}
	}, 
	
	// Transitions
	slideLeftTransition: {type: 'slide', direction: 'left'},
	slideRightTransition: {type: 'slide', direction: 'right'},
	
	// Helper functions
	activateNewPostView: function(imgSrc){
		var newPostView = this.getNewPostView();
		newPostView.reset();
		//newPostView.getComponent('pic_uploader').setSrc(imgSrc);
		var loaded = Ext.getCmp('picture');
		
		if (loaded) {
		    loaded.destroy();
		}
		
		var picture = Ext.create('Ext.Img', {
		    id: 'picture',
		    width: 250,
		    height: 250,
		    src: 'data:image/jpeg;base64,'+imgSrc,
		    fullscreen: true,
		    showAnimation: 'fadeIn',
		    html: 'uploaded image'
		});
		var uploader = Ext.getCmp('pic_uploader');
        uploader.add(picture);
        //picture.show('fadeIn');
		//Ext.getCmp('pic_uploader').setSrc(imgSrc);
        //Ext.Msg.alert('File upload', 'Success!');
        alert(picture.getSrc());
		Ext.Viewport.animateActiveItem(newPostView, this.slideLeftTransition);
	},
	
	activateUploadView: function(){
		var uploadView = this.getUploadView();
		Ext.Viewport.animateActiveItem(uploadView, this.slideRightTransition);
	},

	//Commands
	onTakePhotoCommand: function(){
		//activate camera 
		Ext.device.Camera.capture({
		     source: 'camera',
		     destination: 'data',
		     success: function(image) {
		    	  this.activateNewPostView(image);
		     },
		             
		     failure: function(result) {
		          Ext.device.Notification.show({
		               title: 'Error',
		               message: result
		          });
		     },
		     scope: this
		});	
	},  // onTakePhotoCommand
	
	onCancelCommand:function(){
		console.log('onCancelCommand');
		var newPostView = this.getNewPostView();
		var newValues = newPostView.getValues(); // get the fields with user input
		//if(newValues.caption || newValues.category || newValues.geolocation || newPostView.getComponent('pic_uploader').getSrc()){
			Ext.Msg.confirm('','Changes unsaved! Exit anyway?', function(e){
				if (e == 'no')  return;
				else this.activateUploadView();
			}, this // scope of the controller
			);
		//}
		//else this.activateUploadView();
	},  //onCancelCommand
	
	onPostCommand:function(){
		console.log('onPostCommand');
		var post = Ext.create("CrossView.model.Picture", {
			caption: "",
			image: "",
			category:"",
			geolocation:""
		}); 
		var newPostView = this.getNewPostView();
		var newValues = newPostView.getValues();
		post.set("caption", newValues.caption);
		if(newValues.category == null){
			post.set("category", '8'); // 'others' category
		}
		else post.set("category", newValues.category);
		post.set("image", 'R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkwBADs=');
		post.set("geolocation", "here");
		
		// validation
		var errors = post.validate(); 
		
		if(!errors.isValid()){
			Ext.Msg.alert("", errors.getAt(0).getMessage(), Ext.emptyFn);
			post.reject();
			return;
		}
		
		//store
		/*var postsStore = Ext.getStore("Posts");
        if (null == postsStore.findRecord('id', post.data.id)) {
            postsStore.add(post));
        }

        postsStore.sync();

        postsStore.sort([{ property: 'dateCreated', direction: 'DESC'}]); */
		
		// server
		post.save({
			failure: function(){
				var proxy = post.getProxy(),
					reader = proxy.getReader(),
					raw = reader.rawData;
				Ext.Msg.alert("", reader.getMessage(raw), Ext.emptyFn);
			},
			success: function(){
				Ext.Msg.alert("","Upload successful!", Ext.emptyFn);
				this.activateUploadView();
			}
		},this);		
	}
});