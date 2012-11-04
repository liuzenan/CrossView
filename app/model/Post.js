Ext.define('CrossView.model.Post', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'caption' , type: 'string'},
            { name: 'image', type: 'string'},
            { name: 'category', type: 'string'},
            { name: 'geolocation', type: 'string'},
            { name: 'inProfile'},
            'name',
            'username'
        ],
        
        proxy: {
            type: 'rest',
            url: 'http://54.251.40.149/functions/newPost.php',
            reader:{
                type:'json',
                rootProperty:'post',
                messageProperty: 'message'
            }
        },
        
        validations: [
          { type: 'presence', field: 'caption', message: 'Please enter your caption.' },
          { type: 'presence', field: 'image', message: 'Please upload a photo.' },
          { type: 'presence', field: 'category', message: 'Please choose a category.' }
        ]
        }
});