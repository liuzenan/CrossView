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
							cls:'chat_wrapper',
							itemTpl: new Ext.XTemplate(
								'<div class="chat_photo" style="background:url(resources/images/post.jpg);">',
									'<h2 class="cover_caption">{caption}</h2>',
								'</div>',
								'<tpl for="users">',
									'<img src="resources/images/profile-pic.jpg" />',
								'</tpl>',
								'<div>',
								'<tpl for="users">',
									'<h4>{firstname}</h4>',
								'</tpl>',
								'</div>',
								'<p>Last updated 2 hours ago near Singapore</p>',
								'<div><span>5</span>Posts</div>',
								'<div><span>2</span>Unread</div>',
								'<div><span>25</span>Locations</div>'
							),
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