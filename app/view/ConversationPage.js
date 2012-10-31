Ext.define('CrossView.view.ConversationPage',{
	extend: 'Ext.navigation.View',
	requires:[
		'Ext.Button'
	],
	xtype:'conversationpage',
	config:{
		navigationBar: {
		    items: [
		        {
		            xtype: 'button',
		            text: 'Options',
		            align: 'right'
		        },
		        {
		            xtype: 'button',
		            id: 'conversationbackbtn',
		            cls:'x-button-back',
		            text: 'Back',
		            align: 'left'
		        }
		    ],
		},
		items:[
			{
				title: 'Conversation'
			}
		],
		listeners: [{
        	delegate: "#conversationbackbtn",
        	event: "tap",
        	fn:"onConversationBackBtnTap"
        }]
	},
    onConversationBackBtnTap: function(){
    	console.log("onConversationBackBtnTap");
    	this.fireEvent("ConversationBackCmd",this);
    }
});