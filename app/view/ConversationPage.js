Ext.define('CrossView.view.ConversationPage',{
	extend: 'Ext.navigation.View',
	requires:[
		'Ext.Button',
		'Ext.DataView'
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
				title: 'Conversation',
				scrollable:true,
				items:[
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