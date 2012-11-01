Ext.define('CrossView.view.ProfilePage',{
	extend: 'Ext.navigation.View',
	xtype: 'profilepage',
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
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    text: 'Invite',
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
                        itemId:'profile-tabpanel',
                        scrollable: false,
                        tabBar: {
                            docked: 'top',
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
                            'margin-top' :'60px'
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
                                        '<span class="profile-post-title">3 hours ago near British Museum, UK</span>',
                                        '<div class="profile-post-image">',
                                        '<div class="post_stats">',
                                            '<span class="post_like">21</span>',
                                            '<span class="post_view">120</span>',
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
                                    xtype:'dataview',
                                    itemTpl: new Ext.Template(
                                        '<h3>{name}</h3>',
                                        '<p>234 posts, 12 people</p>'
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
        },
        {
            delegate:'#profile-page-root',
            event:"initialize",
            fn:"onPageLoad"
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
                height = childcount*80;
            }else if(newcardtitle=="Categories"){
                childcount = Ext.select('.x-dataview-container', newcardid).elements[0].childElementCount;
                height = childcount*100;
            }else{
                height = null;
            }
            console.log(height);
            var windowheight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

            if(height<windowheight){
                height=windowheight;
            }
            console.log(windowheight);
            this.innerElement.dom.style.height = height+215+"px";
        }
    },

    onPageLoad: function(list,opts){
        var childcount = Ext.select('.recentpanel .x-dataview-container').elements[0].childElementCount;
        var height = childcount*80;
        console.log(childcount);
        Ext.select('.profile-page-root .x-navigationview-inner').setHeight(height);
    }
});