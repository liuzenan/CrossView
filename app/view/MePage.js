Ext.define('CrossView.view.MePage',{
    extend: 'Ext.navigation.View',
    xtype: 'mepage',
    requires:[
        'Ext.tab.Panel',
        'Ext.XTemplate',
        'Ext.Button',
        'Ext.Container',
        'Ext.DataView',
        'Ext.navigation.View',
        'Ext.List'
    ],
    config:{
        scrollable: true,
        navigationBar:{
            hidden:true
        },
        items:[
        {
            xtype : 'container',
            scrollable: false,
            items : [
            {
                xtype:'container',
                scrollable: false,
                items:[
                    {
                        xtype:'container',
                        scrollable: false,
                        tpl: new Ext.XTemplate(
                            '<div class="user_profile x-layout-vbox" style="background:url(resources/images/post.jpg)">',
                                '<img class="profile_pic" src="resources/images/profile-pic.jpg"/>',
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
                            'top' : '3.2em',
                            'right' : '20px'
                        }
                    }
                ]
            },
            {
                        xtype: 'tabpanel',
                        itemId:'profile-tabpanel',
                        scrollable: false,
                        tabBar: {
                            docked: 'top',
                            cls:'mepage-tabbar',
                            itemId:'profile-tabbar',
                            layout: {
                                pack: 'center'
                            },
                            style:{
                                'position':'absolute',
                                'width':'100%',
                                'z-index':'9999',
                                '-webkit-transform': 'translate3d(0px, -40px, 0px)'
                            }
                        },
                        style:{
                            'position':'absolute',
                            'min-height':'100%',
                            'min-width' : '100%',
                            'margin-top' :'40px'
                        },
                        items:[
                            {
                                title: 'Recent',
                                scrollable: false,
                                cls:'recentpanel',
                                items:[
                                {
                                    xtype:'dataview',
                                    itemTpl: new Ext.Template(
                                        '<div class="recentpost_container x-layout-vbox">',
                                            '<span class="profile-post-title">3 hours ago near British Museum, UK</span>',
                                            '<div class="profile-post-image x-layout-box-item" style="background:url(resources/images/post.jpg)">',
                                                '<div class="post_stats">',
                                                    '<span class="post_like">21</span>',
                                                    '<span class="post_view">120</span>',
                                                '</div>',
                                            '</div>',
                                        '</div>'
                                    ),
                                    store:'RecentPosts',
                                    scrollable:false
                                }
                                
                            ]
                            },
                            {
                                title: 'Categories',
                                cls:'categorypanel',
                                scrollable: false,
                                xtype:'navigationview',
                                navigationBar:{
                                    hidden:true
                                },
                                items:[
                                {
                                    xtype:'list',
                                    cls:'category-list',
                                    itemTpl: new Ext.Template(
                                        '<div class="result_container">',
                                        '<h3>{name}</h3>',
                                        '<p>234 posts, 12 people</p>',
                                        '</div>'
                                    ),
                                    store:'Categories',
                                    scrollable:false
                                }
                            ]
                            },
                            {
                                title: 'About',
                                cls:'aboutpanel',
                                items:[
                                {

                                }
                            ]
                            }
                        ]
            }
            ]            
        }

        ],
        listeners: [
        {
            delegate: "#profile-tabpanel",
            event: "activeitemchange",
            fn:"onProfileTapChange"
        }
        ]
    },

    onProfileTapChange: function(container, newCard, oldCard){
        var childcount, height;
        if(container.rendered){
            console.log(newCard.title);
            console.log(container.rendered);
            var newcardid= newCard.getId();
            var newcardtitle = newCard.title;
            if(newcardtitle=="Recent"){
                childcount = Ext.select('.x-dataview-container', newcardid).elements[0].childElementCount;
                height = childcount*160;
            }else if(newcardtitle=="Categories"){
                childcount = Ext.select('.x-list-container', newcardid).elements[0].childElementCount;
                height = childcount*60;
            }else{
                height = null;
            }
            console.log(height);
            var windowheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

            if(height<windowheight){
                height=windowheight;
            }
            console.log(windowheight);
            this.innerElement.dom.style.height = height+300+"px";
        }
    },

    initialize: function(){
        

        var childcount = this.down('tabpanel').getActiveItem().down('dataview').innerElement.dom.children[0].childElementCount;
        var height = childcount*160;
        //console.log(childcount);
        this.innerElement.dom.style.height = height+300+"px";
    }
});