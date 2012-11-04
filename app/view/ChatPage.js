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
							cls:'search_chat',
							name:'search_chat',
							placeHolder:'Search conversation'
						},
						{
							xtype:'dataview',
							scrollable:false,
							cls:'chat_wrapper',
							itemTpl: new Ext.XTemplate(
								'<div class="x-layout-vbox">',
									'<div class="chat_photo" style="background:url(resources/images/post.jpg);">',
										'<h2 class="cover_caption">{caption}</h2>',
									'</div>',
									'<div class="chat_profile x-layout-hbox">',
										'<div class="chat_profile_pic x-layout-hbox">',
											'<tpl for="user">',
												'<img src="resources/images/profile-pic.jpg" />',
											'</tpl>',
										'</div>',
										'<div class="chat_profile_text x-layout-box-item">',
											'<div class="chat_username">',
												'<tpl for="user">',
													'{firstname}',
													'{[xindex < xcount ? ", " : ""]}',
												'</tpl>',
											'</div>',
											'<p>Last updated 2 hours ago near Singapore</p>',
										'</div>',
									'</div>',
									'<div class="chat_stats x-layout-hbox">',
										'<div class="x-layout-vbox"><span>5</span><span>Posts</span></div>',
										'<div class="x-layout-vbox"><span>2</span><span>Unread</span></div>',
										'<div class="x-layout-vbox"><span>25</span><span>Locations</span></div>',
									'</div>',
								'</div>'
							),
							store:'Conversations',
							itemId:"conversationbtn"
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

    onConversationBtnTap: function(dataview,index,target,record,e,eOpts){
    	console.log("onConversationBtnTap");
    	this.fireEvent("conversationCmd",this,record);
    }

});