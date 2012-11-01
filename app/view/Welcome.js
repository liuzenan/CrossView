Ext.define("CrossView.view.Welcome", {
    extend: 'Ext.tab.Panel',
    xtype: 'welcomeview',
    config: {
        tabBar:{
            cls:'welcome-tabbar',
            docked: 'bottom',
            layout: {
                pack: 'center',
                type:'hbox',
                align:'stretch'
            }
        },
        fullscreen:true,
        styleHtmlContent: true,
        scrollable:false,
        items: [
                {
                	xtype:'loginform'
                },
				{
					xtype: 'signupform'
				},
				{
					xtype: 'tourpanel'
				}

        ]
    }
});
