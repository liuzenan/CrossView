Ext.define('CrossView.controller.NavCtrl',{
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			homepage : 'homepage',
			chatpage : 'chatpage',
			searchpage : 'searchpage',
			conversationpage: 'conversationpage',
			mepage : 'mepage'
		},

		control:{
			chatpage:{
				ConversationCmd : 'onConversationCmd'
			},
			conversationpage:{
				ConversationBackCmd: 'onConversationBackCmd'
			}
		}
	},
	slideLeftTransition: {type: 'slide', direction: 'left'},
	onConversationCmd: function(){
		
		var chatpage = this.getChatpage();
		chatpage.push(new CrossView.view.ConversationPage());
	},
	onConversationBackCmd: function(){
		console.log("back command");
		var chatpage = this.getChatpage();
		chatpage.pop();
	}
});