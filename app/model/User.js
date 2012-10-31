Ext.define('CrossView.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           // { name: 'id', type: 'int' },
            { name: 'fb_id', type: 'string' },	
            { name: 'firstname', type: 'string'},
            { name: 'lastname',  type: 'string'},
            { name: 'password', type: 'string'},
            { name: 'gender' , type: 'string'},
            { name: 'email', type: 'string'},
            { name: 'location', type: 'int'}
        ],
        
		proxy: {
			type: 'rest',
			url: 'http://54.251.40.149/functions/register.php',
            reader:{
                type:'json',
                rootProperty:'user',
                messageProperty: 'message'
            }
		},
        
        validations: [
	      { type: 'presence', field: 'firstname', message: 'Please enter your firstname.' },
	      { type: 'presence', field: 'lastname', message: 'Please enter your lastname.'},
	      { type: 'email', field: 'email', message: 'Please enter a valid Email address.'},
	      { type: 'presence', field: 'password', message: 'Please set your password.'},
	      { type: 'inclusion', field: 'gender', list: ['female', 'male'], message: 'Please select your gender.'},
	      { type: 'exclusion', field: 'location', list: ['country0'], message: 'Please select your location.'}
        ]
    }
});