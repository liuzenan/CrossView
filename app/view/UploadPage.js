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
				text:'Take a photo',
				ui:'action',
				itemId:'takePhotoBtn'
			},
			{
				xtype:'button',
				text:'Upload from phone gallery'
			}
		], // items
		
        listeners: [{
        	delegate: "#takePhotoBtn",
        	event: "tap",
        	fn:"onTakePhotoBtnTap"
        }] // listeners
	}, // config
	
    // Capture events and fire them to controller as commands
    onTakePhotoBtnTap: function(){
    	console.log("takePhotoCommand");
    	this.fireEvent("takePhotoCommand",this);
    }
});
