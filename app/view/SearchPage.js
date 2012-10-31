Ext.define('CrossView.view.SearchPage',{
	extend: 'Ext.navigation.View',
	xtype: 'searchpage',
	requires:[
        'Ext.tab.Panel',
        'Ext.field.Search',
        'Ext.Container'
	],
	config:{
        navigationBar:{
            hidden:true
        },
		items:[
            {
                xtype:'container',
                items:[
            {
                xtype:'searchfield',
                name:'search',
                placeHolder: 'Search'
            },
            {
                xtype:'tabpanel',
                tabBar: {
                    docked: 'top',
                    layout: {
                     pack: 'center'
                    }
                },

                        style:{
                            'position':'absolute',
                            'min-height':'100%',
                            'min-width' : '100%'
                        },

                items:[
                    {
                        title:'People',
                        scrollable :true,
                        items:[
                                {

                                }
                            ]
                 
                    },

                    {
                        title : 'Locations',
                        scrollable :true,
                        items:[
                                {

                                }
                            ]

                    }
                ]
            }
                ]
            }
		]
	}

});