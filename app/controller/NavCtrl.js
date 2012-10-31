Ext.define('CrossView.controller.NavCtrl',{
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			homepage : 'homepage',
			chatpage : 'chatpage',
			searchpage : 'searchpage',
			mepage : 'mepage'
		},

		control:{
			chatpage:{
				ConversationCmd : 'onConversationCmd'
			}
		}
	},
	slideLeftTransition: {type: 'slide', direction: 'left'},
	onConversationCmd: function(){
		
		var chatpage = this.getChatpage();
		chatpage.push(new CrossView.view.ConversationPage());
	}
});