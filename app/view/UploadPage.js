Ext.define('CrossView.view.UploadPage',{
	extend: 'Ext.Container',
	requires:[
		'Ext.Button'
	],
	xtype:'uploadpage',
	config:{
		layout:{
			type:'vbox',
			pack:'center',
			align:'center'
		},
		items:[
			{
				xtype:'button',
				cls:'uploadbtn',
				text:'Take a photo',
				itemId:'takePhotoBtn'
			},
			{
				xtype:'button',
				cls:'uploadbtn',
				text:'Upload an Image',
				itemId:'galleryBtn'
			}
		], // items
		
        listeners: [{
        	delegate: "#takePhotoBtn",
        	event: "tap",
        	fn:"onTakePhotoBtnTap"
        },
        {
        	delegate: "#galleryBtn",
        	event: "tap",
        	fn:"onUploadBtnTap"
        }
        ] // listeners
	}, // config
	
    // Capture events and fire them to controller as commands
    onTakePhotoBtnTap: function(){
    	this.fireEvent("takePhotoCommand",this);
    },
    onUploadBtnTap: function(){
    	this.fireEvent("uploadCommand",this);
    }
});
