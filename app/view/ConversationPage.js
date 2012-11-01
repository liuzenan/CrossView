Ext.define('CrossView.view.ConversationPage',{
	extend: 'Ext.navigation.View',
	requires:[
		'Ext.Button',
		'Ext.DataView',
		'Ext.ActionSheet'
	],
	xtype:'conversationpage',
	config:{
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
		            			}

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
											this.actions.hide();
										}
									},
									{
										text:"Upload from Library",
										scope:this,
										handler:function(){
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
						scrollable:false,
						itemTpl: new Ext.Template(
								'<img class="chatpost_photo" src="" />',
								'<div class="chatpost_profile">',
								'<img class="chatpost_profile" src="" />',
									'<div class="chatpost_profile_text">',
										'<h4>Alice, Bob, David</h4>',
										'<p>2 hours ago near Singapore</p>',
									'</div>',
								'</div>',
								'<h5>This is my breakfast today! How is it going for you...</h5>'
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