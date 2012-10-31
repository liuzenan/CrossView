Ext.define("CrossView.view.Login", {
    extend: 'Ext.form.Panel',
    xtype: 'loginform',
    requires: [
        'Ext.field.Email',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.form.FieldSet',
        'Ext.Img',
        'Ext.Button'
    ],
    config: {
        title: 'Login',
        iconCls: 'user',
        styleHtmlContent: true,
        scrollable:false,
        items: [
            {
                html: [
                '<img height=50 src="resources/images/logo_h.png" />',
                '<p>Welcome, please sign in to get started</p>'
                ].join(""),
            },
            {
                xtype: 'button',
                text: 'Sign in in with Facebook'
            },
            {
                html : '<img height=20 src="resources/images/or_divider.png" />',
            },
            {
                xtype: 'formpanel',
                scrollable:false,
                items:[
                    {   
                        xtype: 'emailfield',
                        name: 'email',
                        placeHolder: 'Email'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        placeHolder: 'Password'                             
                    }
                ]

            },
            {
                xtype: 'button',
                text: 'Login',
                ui: 'action',
                itemId: 'LogInBtn'
            }
        ],
        
        listeners: [{
        	delegate: "#LogInBtn",
        	event: "tap",
        	fn:"onLogInBtnTap"
        }]
    }, 
    
    // Capture tap events and fire them to controller as commands
    onLogInBtnTap: function(){
    	console.log("logInCommand");
    	this.fireEvent("logInCommand",this);
    }
});
