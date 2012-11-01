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
        cls:'welcome-tab',
        iconCls: 'myuser',
        styleHtmlContent: true,
        scrollable:false,
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
                '<p class="welcome-text">Welcome, please sign in to get started.</p>'
                ].join(""),
            },
            {
                cls:'welcome-comp',
                html:'<img height=41 src="resources/images/facebook_btn.png" />'
            },
            {
                cls:'welcome-comp',
                html : '<img height=20 src="resources/images/or_divider.png" />',
            },
            {
                xtype: 'formpanel',
                cls:'welcome-form',
                scrollable:false,
                items:[
                {
                    xtype:'fieldset',
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
                }
                ]

            },
            {
                xtype: 'button',
                text: 'Login',
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
