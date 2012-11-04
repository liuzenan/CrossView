Ext.define('CrossView.view.AddUser',{
	extend: 'Ext.navigation.View',
	requires:[
		'Ext.Button',
		'Ext.tab.Panel',
		'Ext.field.Search',
		'CrossView.view.InviteUserList'
	],
	xtype:'adduserpage',
	config:{
		navigationBar: {
		    items: [
		        {
		            xtype: 'button',
		            text: 'Done',
		            align: 'right'
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
				title: 'Add User',
				xtype:'tabpanel',
				style:{
                            'position':'absolute',
                            'min-height':'100%',
                            'min-width' : '100%'
                },
	            tabBar: {
	            	cls:'adduser-tabbar',
	                docked: 'top',
	                layout: {
	                    pack: 'center'
	                }
	            },

	            items:[
	            	{
	            		title: 'Recent',
	            		xclass: 'CrossView.view.InviteUserList',
	            		scrollable:true
	            	},
	            	{
	            		title: 'Search',
	            		scrollable:true,
	            		items:[
	            			{
	            				xtype:'searchfield',
	            				cls:'search_chat',
	            				name:'searchuser',
	            				placeHolder: 'Search'
	            			},
	            			{
	            				xclass: 'CrossView.view.InviteUserList',
	            				scrollable:false
	            			}
	            		]
	            	},
	            	{
	            		title: 'Friends',
	            		scrollable:true,
	            		xclass: 'CrossView.view.InviteUserList'
	            	}
	            ]
			}
		]
	}
});