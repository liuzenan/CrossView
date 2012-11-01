Ext.define('CrossView.view.HomePage',{
	extend: 'Ext.navigation.View',
	xtype: 'homepage',
	requires:[
        'Ext.Button',
        'Ext.tab.Panel',
        'CrossView.view.InvitationList',
        'Ext.DataView',
        'Ext.List'
    ],
    config:{
        navigationBar:{
            hidden:true
        },
        items:[
        {
            xtype:'tabpanel',
            tabBar: {
                cls:'homepage-tabbar',
                docked: 'top',
                layout: {
                    type:'hbox',
                    pack: 'center',
                    align:'stretch'
                }
            },
            items:[
            {
                title:'Featured',
                scrollable: true,
                items:[
                {
                    xtype:'dataview',
                    style:{
                        'padding':'2em 0'
                    },
                    scrollable:false,
                    itemTpl: new Ext.Template(
                        '<div class="featured_post">',
                            '<div class="featured_post_title x-layout-hbox">',
                                '<img src="resources/images/profile-pic.jpg" height="36" class="feature_post_profile"/>',
                                '<div class="feature_post_title">',
                                    '<h3>British Museum, UK</h3>',
                                    '<p>Alice posted 3 hours ago</p>',
                                '</div>',
                            '</div>',
                            '<div class="featured_post_image" style="background:url(resources/images/post.jpg);">',
                                '<div class="post_stats">',
                                    '<span class="post_like">21</span>',
                                    '<span class="post_view">120</span>',
                                '</div>',
                            '</div>',
                        '</div>'
                    ),
                    store: 'Featured'
                },
                ]
            },
            {
                title:'Notifications',
                scrollable: true,
                items:[
                {
                    html: '<h2><span>0</span> New Invitations</h2>'
                },
                {
                    xclass: 'CrossView.view.InvitationList',
                    scrollable:false
                },
                {
                    html: '<h2><span>0</span> New Posts</h2>'
                },
                {
                    xtype:'list',
                    itemTpl: new Ext.Template(
                        '<img src="resources/icons/Icon.png" width="60" height="60"/>',
                        '<span class="newpost_text">',
                            '<h4>Bob Trololol has posted to you</h4>',
                            '<p>3 hours ago near the British Museum, London</p>',
                        '</span>'
                    ),
                    store: 'NewPosts',
                    scrollable:false
                }
                ]

            }
            ]     

        }
        ]
    }
});