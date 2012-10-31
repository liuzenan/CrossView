Ext.define('CrossView.view.ChatPage',{
	extend: 'Ext.navigation.View',
	xtype: 'chatpage',
	requires:[
		'Ext.field.Search',
		'Ext.Button',
		'Ext.Container'
	],
	config:{
		navigationBar: {
			hidden: true,
		    items: [
		        {
		            xtype: 'button',
		            text: 'Options',
		            align: 'right'
		        }
		    ]
		},
		items:[
				{
					xtype:'container',
					items:[
						{
							xtype:'searchfield',
							name:'search_chat',
							placeHolder:'Search conversation'
						},
						{
							xtype:'button',
							text:'open conversation',
							itemId: 'conversationbtn'
						}
				]			
			}
		],
        listeners: [{
        	delegate: "#conversationbtn",
        	event: "singletap",
        	fn:"onConversationBtnTap"
        }]
	},

    onConversationBtnTap: function(){
    	console.log("onConversationBtnTap");
    	this.fireEvent("ConversationCmd",this);
    }

});