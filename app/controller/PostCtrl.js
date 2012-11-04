Ext.define("CrossView.controller.PostCtrl", {
	extend: "Ext.app.Controller",
	requires:[
	          'Ext.device.Camera',
	          'Ext.device.Connection',
	          'Ext.device.Notification',
	          'Ext.device.Orientation',
	          'Ext.LoadMask'
	          ],
	config: {
		refs:{
			// Lookup views by xtype
			uploadView: "uploadpage",
			newPostView: "newpost",
			homeView: "homeview"
		},
		
		control: {
			uploadView: {
				// Commands fired by the view UploadPage.js
				takePhotoCommand: "onTakePhotoCommand",
				uploadCommand:"onUploadCommand"
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
		//set picture
		var uploader = Ext.getCmp('pic_uploader');
		var imageString = "url(data:image/jpeg;base64," + imgSrc + ") no-repeat center center fixed";
        uploader.element.dom.style.background = imageString;
        //set geolocation
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(function(position){
				var lat = position.coords.latitude;
			    var lng = position.coords.longitude;
			    var location_string = lat + "," + lng;
			    var geocoder = new google.maps.Geocoder();
			    var latlng = new google.maps.LatLng(lat, lng);
			    geocoder.geocode({'latLng': latlng}, function(results, status){
			    	if (status == window.google.maps.GeocoderStatus.OK) {
						if (results[1]) {
							var size=results[0].address_components.length;
							var address=results[0].formatted_address;
							var add=address.split(" ");
							var length=add.length;
							var i=0;
							var full_address="";
							while(i<length-1)
							{
								full_address=full_address+add[i]+" ";
								i=i+1;

							}
							//alert(results[0].formatted_address); // full address
							//alert(full_address);    //address without postal code
							//alert(results[0].address_components[size-3].long_name); // state
							//alert(results[0].address_components[size-2].long_name); // country
							//alert(lat);//latitude
							//alert(lng);//longitude
							Ext.geolocation=lng+','+lat+','+ full_address;
							Ext.getCmp('geolocation').setHtml(full_address);
						}
						else {
							Ext.getCmp('geolocation').setHtml("No geolocation:(");
							Ext.geolocation="No data";
						}
			    	} 
					else {
						Ext.getCmp('geolocation').setHtml("No geolocation:(");
						Ext.geolocation="No data";
					}
			    }); 
			}, function(){
				Ext.getCmp('geolocation').setHtml("No geolocation:(");
				Ext.geolocation="No data";
			});
		}
		else {
			Ext.getCmp('geolocation').setHtml("No geolocation:(");
			Ext.geolocation="No data";
		}
		// transit to newPostView
		Ext.Viewport.animateActiveItem(newPostView, this.slideLeftTransition);
	},
	
	activateHomeView: function(){
		var homeView = this.getHomeView();
		Ext.Viewport.animateActiveItem(homeView, this.slideRightTransition);
	},

	//Commands
	onTakePhotoCommand: function(){
		//activate camera 
		Ext.device.Camera.capture({
		     source: 'camera',
		     destination: 'data',
		     success: function(image) {
		    	  this.activateNewPostView(image);
		    	  var newPostView = this.getNewPostView();
		    	  newPostView.imgSrc = image; // variable to store the image source
		     },
		             
/*		     failure: function(result) {
		          Ext.device.Notification.show({
		               title: 'Error',
		               message: result
		          });
		     },*/
		     scope: this,
		     encoding:'jpg'
		});	
	},  // onTakePhotoCommand
	
	onUploadCommand: function(){
		//activate camera 
		Ext.device.Camera.capture({
		     source: 'library',
		     destination: 'data',
		     success: function(image) {
		    	  this.activateNewPostView(image);
		    	  var newPostView = this.getNewPostView();
		    	  newPostView.imgSrc = image; // variable to store the image source
		     },
		             
/*		     failure: function(result) {
		          Ext.device.Notification.show({
		               title: 'Error',
		               message: result
		          });
		     },*/
		     scope: this,
		     encoding:'jpg'
		});	
	},  // onUploadCommand
	
	onCancelCommand:function(){
		console.log('onCancelCommand');
		var newPostView = this.getNewPostView();
		var newValues = newPostView.getValues(); // get the fields with user input
		//if(newValues.caption || newValues.category || newValues.geolocation || newPostView.getComponent('pic_uploader').getSrc()){
			Ext.Msg.confirm('','Changes unsaved! Exit anyway?', function(e){
				if (e == 'no')  return;
				else this.activateHomeView();
			}, this // scope of the controller
			);
		//}
		//else this.activateUploadView();
	},  //onCancelCommand
	
	onPostCommand:function(){ 
		//var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait...", indicator:true});
		if(!Ext.device.Connection.isOnline()){
			Ext.Msg.alert("", "No network!", Ext.emptyFn);
			return;
		}
		var post = Ext.create("CrossView.model.Picture", {
			caption: "",
			image: "",
			category:"",
			geolocation:""
		}); 
		var newPostView = this.getNewPostView();
		//newPostView.getComponent('postBtn').disable(); // disable button temporarily
		var newValues = newPostView.getValues();
		post.set("caption", newValues.caption);
		if(newValues.category == '1'){
			post.set("category", '9'); // 'others' category
		}
		else post.set("category", newValues.category);
		post.set("image", newPostView.imgSrc);
		post.set("geolocation", Ext.geolocation);
		// validation
		var errors = post.validate(); 
		
		if(!errors.isValid()){
			Ext.Msg.alert("", errors.getAt(0).getMessage(), Ext.emptyFn);
			post.reject();
			return;
		}
		
		//ajax loader
		Ext.Viewport.setMasked({
		       xtype: 'loadmask',
		       message: 'Please wait...'
		});
		
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
				Ext.Viewport.setMasked(false); // clear the loader
				Ext.Msg.alert("","Failed to upload!", Ext.emptyFn);
			},
			success: function(){
				//newPostView.getComponent('postBtn').enable(); // enable button
				Ext.Viewport.setMasked(false); // clear the loader
				Ext.Msg.alert("","Upload successful!", Ext.emptyFn);
				this.activateHomeView();
			}
		},this);		
	}
});