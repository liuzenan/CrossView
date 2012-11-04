Ext.define('CrossView.view.ConversationPage',{
	extend: 'Ext.navigation.View',
	requires:[
		'Ext.Button',
		'Ext.DataView',
		'Ext.ActionSheet'
	],
	xtype:'conversationpage',
	config:{
		cls:'conversationpage',
		navigationBar: {
		    items: [
		        {
		            xtype: 'button',
		            text: 'Options',
		            align: 'right',
		            handler:function(){
		            	if(!this.actions){
		            		this.actions = Ext.Viewport.add({
		            			xtype:'panel',
		            			hideOnMaskTap : true,
		            			modal:true,
		            			top:60,
		            			right:0,
		            			defaultType:'button',
		            			layout:{
		            				type:'vbox',
		            				align:'stretch'
		            			},
		            			items:[
		            				{
		            					text:'Invite Users',
		            					ui:'plain'
		            				},
		            				{
		            					text:'Leave Conversation',
		            					ui:'plain'
		            				}
		            			]

		            		});
		            	}
		            	this.actions.show();
		            }
		        },
		        {
		            xtype: 'button',
		            id: 'conversationbackbtn',
		            ui:'back',
		            text: 'Back',
		            align: 'left'
		        }
		    ],
		},
		items:[
			{
				title: 'Conversation',
				scrollable:true,
				items:[
				{
					xtype:'button',
					cls:'newpost_btn',
					docked:'top',
					text:'New Post',
					handler:function(){
						if(!this.actions){
							this.actions = Ext.Viewport.add({
								xtype: 'actionsheet',
								items:[
									{
										text:'Take Photo',
										scope:this,
										handler:function(){
											this.fireEvent("takePhotoCmd", this);
											this.actions.hide();
										}
									},
									{
										text:"Upload from Library",
										scope:this,
										handler:function(){
											this.fireEvent("uploadCmd", this);
											this.actions.hide();
										}
									},
									{
										text:'Cancel',
										scope:this,
										handler:function(){
											this.actions.hide();
										}
									}
								]
							});
						}
						this.actions.show();
					}
				},
					{
						xtype:'dataview',
						cls:'chat_wrapper',
						scrollable:false,
						itemTpl: new Ext.XTemplate(
								'<div class="x-layout-vbox">',
									'<div class="chat_photo" style="background:url(resources/images/post.jpg);">',
									'</div>',
									'<div class="chat_profile x-layout-hbox">',
										'<div class="chat_profile_pic x-layout-hbox">',
											'<img src="resources/images/profile-pic.jpg" />',
										'</div>',
										'<div class="chat_profile_text x-layout-box-item">',
											'<div class="chat_username">',
													'{username}',
											'</div>',
											'<p>Last updated 2 hours ago near Singapore</p>',
										'</div>',
									'</div>',
									'<div class="post_caption">{name}</div>',
								'</div>'
						),
						store:'ConversationPosts'
					}
				]
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