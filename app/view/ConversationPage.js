Ext.define('CrossView.view.ConversationPage',{
	extend: 'Ext.Container',
	requires:[
		'Ext.Button'
	],
	xtype:'conversationpage',
	config:{
		title: 'Conversation',
		items:[
			{
				xtype:'button',
				text:'open post'
			}
		]
	}
});