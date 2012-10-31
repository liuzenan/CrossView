Ext.define("CrossView.controller.UserCtrl", {
	extend: "Ext.app.Controller",
	requires:[
		'Ext.data.ResultSet'
	],
	config: {
		refs:{
			// Lookup views by xtype
			loginView: "loginform",
			signUpView: "signupform",
			homeView: "homeview"
		},
		
		control: {
			loginView: {
				// Commands fired by the view Login.js  
				logInCommand: "onLogInCommand"
			},
			signUpView: {
				// Command fired by the view SignUp.js
				signUpCommand: "onSignUpCommand"
			},
			homeView: {
				//commands
			}
		}
	}, 
	
	// Transitions
	slideLeftTransition: {type: 'slide', direction: 'left'},
	
	// Helper functions
	activateHomeView: function(/*record*/){
		var homeView = this.getHomeView();
		//homeView.setRecord(record);
		Ext.Viewport.animateActiveItem(homeView, this.slideLeftTransition);
	},
	
	//Commands
	onSignUpCommand: function(){
		
		var signUpView = this.getSignUpView(); // getSignUpView() is a function created by the ref in the controller
		var newUser = Ext.create("CrossView.model.User", {
			fb_id: "",
			firstname: "",
			lastname: "",
			password: "",
			gender: "",
			email: "",
			location: ""
		});	
		
		var newValues = signUpView.getValues();
		
		// Update the newUser's fields with form values
		newUser.set("firstname", newValues.firstname);
		newUser.set("lastname", newValues.lastname);
		newUser.set("password", newValues.password);
		newUser.set("gender", newValues.gender);
		newUser.set("email", newValues.email);
		newUser.set("location", 123);         //??????????????????????????????????????????????????????????????
		
		var errors = newUser.validate(); // validate function provided by sencha touch model
		
		if(!errors.isValid()){
			Ext.Msg.alert("", errors.getAt(0).getMessage(), Ext.emptyFn);
			newUser.reject();
			return;
		}
		
		newUser.save({
			failure: function(record, operation){
				var proxy = newUser.getProxy(),
					reader = proxy.getReader(),
					raw = reader.rawData;
				Ext.Msg.alert("", "failure: " + reader.getMessage(raw), Ext.emptyFn);
			},
			success: function(record, operation){
				Ext.Msg.alert("", record.get('firstname') + " Registration successful!", Ext.emptyFn);
				this.activateHomeView();
			}
		},this);
		
	   /*	var usersStore = Ext.getStore("Users");
		if(null == usersStore.findRecord("email", newUser.data.email)){
			usersStore.add(newUSer); // add the new user to the store cache
		}
		
		usersStore.sync(); */
		
		
	},
	onLogInCommand: function(){
		console.log("onLoginCommand");
		var login = Ext.create("CrossView.model.Login", {
			email: "",
			password: ""
		});
		var loginView = this.getLoginView(); 
		var newValues = loginView.getValues();
		login.set("email",newValues.email);
		login.set("password",newValues.password);
		
		// validation
		var errors = login.validate(); 
		
		if(!errors.isValid()){
			Ext.Msg.alert("", errors.getAt(0).getMessage(), Ext.emptyFn);
			login.reject();
			return;
		}
		
		// server
		login.save({
			failure: function(){
				var proxy = login.getProxy(),
					reader = proxy.getReader(),
					raw = reader.rawData;
				Ext.Msg.alert("", "failure: " + reader.getMessage(raw), Ext.emptyFn);
			},
			success: function(){
				Ext.Msg.alert("","Login successful!", Ext.emptyFn);
				this.activateHomeView();
			}
		},this);
	}
});