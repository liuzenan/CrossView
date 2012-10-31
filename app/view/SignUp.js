Ext.define("CrossView.view.SignUp", {
    extend: 'Ext.form.Panel',
    xtype: 'signupform',
    requires: [
               'Ext.form.Panel',
               'Ext.field.Email',
               'Ext.field.Password',
               'Ext.field.Text',
               'Ext.form.FieldSet',
               'Ext.form.Select',
               'Ext.Img',
               'Ext.Button',
    ],
    config: {
        title: 'Sign up',
        iconCls: 'compose',
        scrollable:false,
        styleHtmlContent: true,
        items: [
            {
                html: [
                '<img height=50 src="resources/images/logo_h.png" />',
                '<p>Please sign up with your email</p>'
                ].join("")
            },
            {
                xtype: 'fieldset',
                items:[
                    {   
                        xtype: 'textfield',
                        name: 'firstname',
                        placeHolder: 'First Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'lastname',
                        placeHolder: 'Last Name'                             
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        placeHolder: 'Email'  
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        placeHolder: 'Password'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'gender',
                        options:[
                            {text: 'Gender', value:'gender'},
                            {text: 'Female', value:'female'},
                            {text: 'Male', value:'male'}
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        name: 'country',
                        id: 'countries',
                    },
                    {
                        xtype: 'selectfield',
                        name: 'state',
                        id: 'states'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Sign up',
                ui:'action',
                itemId:"signUpBtn"
            },
            {
                html: '<p>By tapping "Sign up" above, you are agreeing with CrossView&rsquo;s Terms of Service, and Privacy Policy</p>'
            }
        ],
        listeners: [{
        	delegate: "#signUpBtn",
        	event: "tap",
        	fn:"onSignUpBtnTap"
        },
        {
        	delegate:"#countries",
        	event:"change",
        	fn:"onCountrySelected"
        }]

    },
    // Capture events and fire them to controller as commands
    onSignUpBtnTap: function(){
    	console.log("signUpCommand");
    	this.fireEvent("signUpCommand",this);
    },
    onCountrySelected: function(){
    	console.log("showStatesCommand");
    	this.fireEvent("showStatesCommand",this);
    }
});
