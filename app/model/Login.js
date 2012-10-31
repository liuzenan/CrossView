Ext.define('CrossView.model.Login', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'email', type: 'string' },	
            { name: 'password', type: 'string'}
        ],
        
		proxy: {
			type: 'rest',
			url: 'http://54.251.40.149/functions/login.php',
            reader:{
                type:'json',
                rootProperty:'login',
                messageProperty: 'message'
            }
		},
        
        validations: [
	      { type: 'email', field: 'email', message: 'Please enter your Email address correctly.' },
	      { type: 'presence', field: 'password', message: 'Please enter your password.'}
        ]
    }
});