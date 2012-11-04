Ext.define("CrossView.store.Conversations", {
	extend: "Ext.data.Store",
	config: {
		model: "CrossView.model.Conversation",
		proxy:{
			type:'rest',
			url:'http://54.251.40.149/functions/user/conversation/',
			reader:{
				type:'json',
				totalProperty: 'totalConversation',
				successProperty : 'success',
				rootProperty :'conversation'
			}
		}
	}
});