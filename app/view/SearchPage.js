Ext.define('CrossView.view.SearchPage',{
	extend: 'Ext.navigation.View',
	xtype: 'searchpage',
	requires:[
        'Ext.tab.Panel',
        'Ext.field.Search',
        'Ext.Container',
        'Ext.List'
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
                                    xtype:'list',
                                    cls:'search-people-list',
                                    itemTpl: new Ext.Template(
                                        '<img src="" class="search-people-profile" />',
                                        '<div>',
                                            '<h3>{firstname} {lastname}</h3>',
                                            '<p>234 posts, 12 conversations</p>',
                                        '</div>'
                                    ),
                                    store:'SearchPeople',
                                    scrollable:false
                                }
                            ]
                 
                    },

                    {
                        title : 'Locations',
                        scrollable :true,
                        items:[
                                {
                                    xtype:'list',
                                    cls:'search-location-list',
                                    itemTpl: new Ext.Template(
                                        '<h3>{name}</h3>',
                                        '<p>234 posts, 12 conversations</p>'
                                    ),
                                    store:'SearchLocations',
                                    scrollable:false
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