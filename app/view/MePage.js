Ext.define('CrossView.view.MePage',{
	extend: 'Ext.navigation.View',
	xtype: 'mepage',
	requires:[
        'Ext.tab.Panel',
        'Ext.XTemplate',
        'Ext.Button',
        'Ext.Container',
        'Ext.DataView',
        'Ext.navigation.View'
	],
	config:{
        scrollable: true,
        navigationBar:{
            hidden:true
        },
		items:[
        {
            xtype : 'container',
            items : [
            {
                xtype:'container',
                items:[
                    {
                        xtype:'container',
                        tpl: new Ext.XTemplate(
                            '<div class="user_profile">',
                                '<img class="profile_pic" src="resources/images/logo_h.png"/>',
                                '<h1 class="user_name">Alice Trololol</h1>',
                                '<h2 class="user_location">New York</h2>',
                            '</div>'
                        ),
                        data:{}
                    },
                    {
                        xtype:'button',
                        text: 'Setting',
                        ui:'normal',
                        style:{
                            'position':'absolute',
                            'top' : '50px',
                            'right' : '20px'
                        }
                    }
                ]
            },
            {
                        xtype: 'tabpanel',
                        tabBar: {
                            docked: 'top',
                            layout: {
                                pack: 'center'
                            },
                            style:{
                                'position':'absolute',
                                'width':'100%',
                                'z-index':'9999',
                                '-webkit-transform': 'translate3d(0px, 15px, 0px)'
                            }
                        },
                        style:{
                            'position':'absolute',
                            'min-height':'100%',
                            'min-width' : '100%'
                        },
                        items:[
                            {
                                title: 'Recent',
                                items:[
                                {
                                    xtype:'dataview',
                                    itemTpl: new Ext.Template(
                                        '<span class="profile-post-title">3 hours ago near British Museum, UK</span>',
                                        '<div class="profile-post-image">',
                                        '<div class="post_stats">',
                                            '<span class="post_like">21</span>',
                                            '<span class="post_view">120</span>',
                                        '</div>',
                                        '</div>'
                                    ),
                                    store:'RecentPosts'
                                },
                                
                            ]
                            },
                            {
                                title: 'Categories',
                                items:[
                                {
                                    xtype:'navigationview',
                                    navigationBar:{

                                    },
                                    

                                }
                            ]
                            },
                            {
                                title: 'About',
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