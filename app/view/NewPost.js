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
				cls:'new_inputtext',
				name:'caption',
				flex:0.5,
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
						html:'Detecting current location...',
						cls:'new_geolocation',
						name:'geolocation',
						value:'',
						flex:1.5
					},
					{
						xtype:'selectfield',
						cls:'new_category',
						name:'category',
		                options:[
		                         {text: 'Category', value:'1'},
		                         {text: 'Food', value:'2'},
		                         {text: 'Scenery', value:'3'},
		                         {text: 'People', value:'4'},
		                         {text: 'Sports', value:'5'},
		                         {text: 'Buildings', value:'6'},
		                         {text: 'Daily Life', value:'7'},
		                         {text: 'Night Life', value:'8'},
		                         {text: 'Others', value:'9'}
		                ],
		                flex:1
					}
				]
			},
			{                        
	            id:'pic_uploader',
	            flex:2,
				style:{
					'background-size':'cover',
					'-webkit-background-size':'cover'
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
