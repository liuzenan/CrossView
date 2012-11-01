Ext.define("CrossView.controller.PostCtrl", {
	extend: "Ext.app.Controller",
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
			}
		}
	}, 
	
	// Transitions
	slideLeftTransition: {type: 'slide', direction: 'left'},
	
	// Helper functions
	activateNewPostView: function(){
		var newPostView = this.getNewPostView();
		Ext.Viewport.animateActiveItem(newPostView, this.slideLeftTransition);
	},
	
	//Commands
	onTakePhotoCommand: function(){
		console.log('onTakePhotoCommand');
		this.activateNewPostView();
	}  // onTakePhotoCommand
});