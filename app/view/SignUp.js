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
               'Ext.Container'
    ],
    config: {
        title: 'Sign up',
        cls:'welcome-tab',
        iconCls: 'signup',
        scrollable:false,
        styleHtmlContent: true,
        layout:{
            type:'vbox',
            pack:'start',
            align:'center'
        },
        items: [
            {
                cls:'welcome-comp',
                html: [
                '<img class="login-logo" height=50 src="resources/images/logo_h.png" />',
                '<p class="welcome-text">Please sign up with your email</p>'
                ].join("")
            },
            {
                xtype: 'fieldset',
                cls:'welcome-form',
                items:[
                {
                    xtype:'container',
                    layout:{
                        type:'hbox',
                        align:'center'
                    },
                    items:[
                        {   
                            xtype: 'textfield',
                            cls:'firstname',
                            name: 'firstname',
                            placeHolder: 'First Name',
                            flex:1
                        },
                        {
                            xtype: 'textfield',
                            cls:'lastname',
                            name: 'lastname',
                            placeHolder: 'Last Name',
                            flex:1                
                        }
                    ]
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
                    xtype:'container',
                    layout:{
                        type:'hbox',
                        align:'center'
                    },
                    items:[
                    {
                        xtype: 'selectfield',
                        cls:'country',
                        name: 'country',
                        id: 'countries',
                        flex:1
                    },
                    {
                        xtype: 'selectfield',
                        cls:'state',
                        name: 'state',
                        id: 'states',
                        flex:1
                    }
                    ]
                }

                ]
            },
            {
                xtype: 'button',
                text: 'Sign up',
                itemId:"signUpBtn"
            },
            {
                html: '<p class="welcome-text">By tapping "Sign up" above, you are agreeing with CrossView&rsquo;s Terms of Service, and Privacy Policy</p>'
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
