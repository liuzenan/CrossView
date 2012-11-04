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
                cls:'search_chat',
                name:'search',
                placeHolder: 'Search'
            },
            {
                xtype:'tabpanel',
                cls:'search_panel',
                tabBar: {
                    cls:'homepage-tabbar',
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
                                        '<div class="search-list-item x-layout-hbox">',
                                        '<img src="resources/images/profile-pic.jpg" class="search-people-profile" />',
                                        '<div class="result_container x-layout-box-item">',
                                            '<h3>{firstname} {lastname}</h3>',
                                            '<p>234 posts, 12 conversations</p>',
                                        '</div>',
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
                                        '<div class="search-list-item">',
                                            '<div class="result_container">',
                                                '<h3>{name}</h3>',
                                                '<p>234 posts, 12 conversations</p>',
                                            '</div>',
                                        '</div>'
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