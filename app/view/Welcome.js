Ext.define("CrossView.view.Welcome", {
    extend: 'Ext.tab.Panel',
    xtype: 'welcomeview',
    config: {
        tabBarPosition: 'bottom',
        fullscreen:true,
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
