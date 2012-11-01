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
        cls:'hometab',
        layout: {
            pack: 'center',
            type:'hbox',
            align:'stretch'
        }
    },
        styleHtmlContent: true,
        fullscreen: true,
        items: [
            {
                iconCls: 'myhome',
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
                iconCls: 'speech',
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
                iconCls: 'camera',
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
                iconCls: 'mysearch',
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
                iconCls: 'myuser',
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
