Ext.define('CrossView.view.PostDetail',{
	extend: 'Ext.Container',
	requries:[
		'Ext.Button'
	],
	xtype:'postdetail',
	config:{
		fullscreen:true,
		items:[
			{
				html:'<img width="100%" src="resources/images/logo_h.png" />'
			},
			{
				html:'detail goes here'
			}
		]
	}
});