Ext.define('CrossView.view.UploadPage',{
	extend: 'Ext.Container',
	requires:[
		'Ext.Button'
	],
	xtype:'uploadpage',
	config:{
		items:[
			{
				xtype:'button',
				text:'Take a photo'
			},
			{
				xtype:'button',
				text:'Upload from phone gallery'
			}
		]
	}
})