Ext.define('CrossView.view.ChatPage',{
	extend: 'Ext.navigation.View',
	xtype: 'chatpage',
	requires:[
		'Ext.field.Search',
		'Ext.Button',
		'Ext.Container',
		'Ext.DataView'
	],
	config:{
		navigationBar: {
			hidden: true
		},
		items:[
				{
					xtype:'container',
					scrollable:true,
					items:[
						{
							xtype:'searchfield',
							name:'search_chat',
							placeHolder:'Search conversation'
						},
						{
							xtype:'dataview',
							scrollable:false,
							itemTpl: new Ext.XTemplate(
								'<div class="chat_photo">',
									'<h2 class="cover_caption"><h2>',
								'</div>',
								'<tpl for=".">',
									'<img src="" />',
								'</tpl>',
								'<tpl for=".">',
									'<h4>Alice, Bob, David</h4>',
									'<p>Last updated 2 hours ago near Singapore</p>',
								'</tpl>',
								'<div><span>5</span>Posts</div>',
								'<div><span>2</span>Unread</div>',
								'<div><span>25</span>Locations</div>'
							),
							itemId: 'conversationbtn',
							store:'Conversations'
						}
				]			
			}
		],
        listeners: [{
        	delegate: "#conversationbtn",
        	event: "itemsingletap",
        	fn:"onConversationBtnTap"
        }]
	},

    onConversationBtnTap: function(){
    	console.log("onConversationBtnTap");
    	this.fireEvent("ConversationCmd",this);
    }

});