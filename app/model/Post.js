Ext.define('CrossView.model.Post', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'caption' , type: 'string'}
                
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
         
         
         // { type: 'inclusion', field: 'gender', list: ['Female', 'Male'], message: 'Please select your gender.'},
        //  { type: 'email', field: 'email', message: 'Please enter a valid Email address.'},
        //  { type: 'exclusion', field: 'location', list: ['country0'], message: 'Please select your location.'}
        ]
		}
});