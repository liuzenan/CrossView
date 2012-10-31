Ext.define("CrossView.view.Home", {
    extend: 'Ext.tab.Panel',
    xtype: 'homeview',
    requires: [
        'Ext.tab.Panel',
        'Ext.field',
        'Ext.Container',
        'Ext.navigation.View'
    ],
    config: {
    tabBar: {
        docked: 'bottom',
        layout: {
            pack: 'center'
        }
    },
        styleHtmlContent: true,
        fullscreen: true,
        items: [
            {
                iconCls: 'home',

                items:[
                    {
                        xtype:'homepage',
                        style:{
                            'position':'absolute',
                            'min-height':'100%',
                            'min-width' : '100%'
                        }
                    }
                ]

            },
            {
                iconCls: 'chat',
                items:[
                    {
                        xtype: 'chatpage',
                        style:{
                                    'position':'absolute',
                                    'min-height':'100%',
                                    'min-width' : '100%'
                        }
                    }
                ]
            },
            {
                iconCls: 'photo',
                items:[
                    {
                        xtype:'uploadpage',
                        style:{
                                    'position':'absolute',
                                    'min-height':'100%',
                                    'min-width' : '100%'
                        }
                    }
                ]
            },
            {
                iconCls: 'search',
                items:[
                    {
                        xtype:'searchpage',
                        style:{
                                    'position':'absolute',
                                    'min-height':'100%',
                                    'min-width' : '100%'
                        }
                    }
                ]
            },
            {
                iconCls: 'user',
                items:[
                {
                    xtype:'mepage',
                        style:{
                                    'position':'absolute',
                                    'min-height':'100%',
                                    'min-width' : '100%'
                        }
                }
                ]
            }
        ]
    }
});
