Ext.define('CrossView.view.AddUser',{
	extend: 'Ext.Container',
	requires:[
		'Ext.Button',
		'Ext.tab.Panel',
		'Ext.field.Search'
	],
	xtype:'adduserpage',
	config:{
		title: 'Add User',
		items:[
			{
				xtype:'tabpanel',
				style:{
                            'position':'absolute',
                            'min-height':'100%',
                            'min-width' : '100%'
                },
	            tabBar: {
	                docked: 'top',
	                layout: {
	                    pack: 'center'
	                }
	            },
	            items:[
	            	{
	            		title: 'Recent'
	            	},
	            	{
	            		title: 'Search',
	            		items:[
	            			{
	            				xtype:'searchfield',
	            				name:'searchuser',
	            				placeHolder: 'Search'
	            			},
	            			{
	            				xtype:'button',
	            				text:'open profile'
	            			}
	            		]
	            	},
	            	{
	            		title: 'Friends'
	            	}
	            ]
			}
		]
	}
});