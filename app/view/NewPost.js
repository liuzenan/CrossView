Ext.define('CrossView.view.NewPost',{
	extend: 'Ext.form.Panel',
	requires:[
		'Ext.TitleBar',
		'Ext.Container',
		'Ext.field.TextArea',
		'Ext.field.Select',
		'Ext.field.Toggle',
		'Ext.Img'
	],
	xtype: 'newpost',
	config:{
		fullscreen:true,
		scrollable:false,
		layout:{
			type:'vbox',
			pack:'start',
			align:'stretch'
		},
		items:[
			{
				xtype:'titlebar',
				docked:'top',
				title:'New Post',
				items:[
					{
						align:'left',
						text:'Cancel',
						itemId:'cancelBtn'
					},
					{
						align:'right',
						text:'Post',
						itemId:'postBtn'
					}
				]
			},
			{
				xtype:'textareafield',
				name:'caption',
				flex:1,
				value:'',
				placeHolder:'say something about the photo...'
			},
			{
				xtype:'container',
				layout:{
					type:'hbox'
				},
				items:[
					{
						html:'geolocation text goes here',
						name:'geolocation',
						value:'',
						flex:2
					},
					{
						xtype:'selectfield',
						name:'category',
						value:'0',
		                options:[
		                         {text: 'Food', value:'1'},
		                         {text: 'Scenery', value:'2'},
		                         {text: 'Night Life', value:'3'},
		                         {text: 'People', value:'4'},
		                         {text: 'Sports', value:'5'},
		                         {text: 'Buildings', value:'6'},
		                         {text: 'Daily Life', value:'7'},
		                         {text: 'Others', value:'8'}
		                ],
		                flex:1
					}
				]
			},
			{                        
	            id:'pic_uploader',
	            flex:2,
	            style:{
					'background': 'no-repeat center center fixed',
					'-webkit-background-size': 'cover',
					'background-size': 'cover'
	            }
			}
		],
		
        listeners: [{
        	delegate: "#cancelBtn",
        	event: "tap",
        	fn:"onCancelBtnTap"
        },
        {
        	delegate: "#postBtn",
        	event: "tap",
        	fn:"onPostBtnTap"
        }]
	}, //config
	
	// Capture tap events and fire them to controller as commands
    onCancelBtnTap: function(){
    	console.log("cancelCommand");
    	this.fireEvent("cancelCommand",this);
    },
    onPostBtnTap: function(){
    	console.log("postCommand");
    	this.fireEvent("postCommand",this);
    }
});
