Ext.define('CrossView.controller.NavCtrl',{
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			homepage : 'homepage',
			searchpage : 'searchpage',
			conversationpage: 'conversationpage',
			mepage : 'mepage',
			postDetailPage: 'postdetail'
		},

		control:{
			homepage: {
				postTapCmd: 'onPostTapCmd'
			},
			conversationpage:{
				ConversationBackCmd: 'onConversationBackCmd'
			}
		}
	},
	
	//Helper functions
	slideLeftTransition: {type: 'slide', direction: 'left'},
	slideRightTransition: {type: 'slide', direction: 'right'},
	activatePostDetailPage: function(){
		var postDetailPage = this.getPostDetailPage();
		Ext.Viewport.animateActiveItem(postDetailPage, this.slideLeftTransition);
	},
	
	// Command handlers
	onPostTapCmd:function(){
		console.log("onPostTapCmd");
		//get post (photo, user, caption)
		//...
		this.activatePostDetailPage();
	},
	onConversationBackCmd: function(){
		console.log("back command");
		var chatpage = this.getChatpage();
		chatpage.pop();
	}
});