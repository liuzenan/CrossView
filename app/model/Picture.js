Ext.define('CrossView.model.Picture', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           // { name: 'id', type: 'int' },
           
            { name: 'img_base',  type: 'string'},
            { name: 'type',  type: 'string'},
            { name: 'geolocation' , type: 'string'},
            { name: 'caption', type: 'string'}          
        ],
        
        proxy: {
            type: 'rest',
            url: 'http://54.251.40.149/functions/newPicture.php',
            reader:{
                type:'json',
                rootProperty:'post',
                messageProperty: 'message'

            
            }
        },
        
        validations: [
          { type: 'presence', field: 'caption', message: 'Please enter your caption.' },
          { type: 'presence', field: 'type', message: 'Please choose the image type'},
          { type: 'presence', field: 'geolocation', message: 'Please choose the geolocation'},
         
       
        ]
    }
});