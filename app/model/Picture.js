Ext.define('CrossView.model.Picture', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'caption' , type: 'string'},
            { name: 'image', type: 'string'},
            { name: 'category', type: 'int'},
            { name: 'geolocation', type: 'string'}
        ],
        
        proxy: {
            type: 'ajax',
            url: 'http://54.251.40.149/functions/picture',
            reader:{
                type:'json',
                rootProperty:'picture',
                messageProperty: 'message'
            }
        },
        
        validations: [
          { type: 'presence', field: 'caption', message: 'Please enter your caption.' }
          //{ type: 'presence', field: 'image', message: 'Please upload a photo.' },
          //{ type: 'presence', field: 'category', message: 'Please choose a category.' }
        ]
    }
});