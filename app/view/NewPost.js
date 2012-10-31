Ext.define('CrossView.view.NewPost',{
	extend: 'Ext.Container',
	requires:[
		'Ext.TitleBar',
		'Ext.field.TextArea',
		'Ext.field.Select',
		'Ext.field.Toggle',
		'Ext.Img'
	],
	xtype: 'newpost',
	config:{
		fullscreen:true,
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'New Post',
				items:[
					{
						align:'left',
						text:'Cancel'
					},
					{
						align:'right',
						text:'Post'
					}
				]
			},
			{
				xtype:'textareafield',
				height:100,
				placeHolder:'say something about the photo...'
			},
			{
				html:'location text goes here'
			},
			{
				xtype:'selectfield',
				name:'category',
				placeHolder:'Category'
			},
			{
				xtype:'togglefield',
				name:'public',
				label:'Visible in Profile'
			},
			{
				html:'<img id="uploadimage" src="" width="100%" />'
			}
		]
	}
})