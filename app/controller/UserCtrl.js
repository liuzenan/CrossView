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
				signUpCommand: "onSignUpCommand",
				showStatesCommand: "onShowStatesCommand"
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
	getStates: function(country){
		var httpxml;
		try
		  {
		  // Firefox, Opera 8.0+, Safari
		  httpxml=new XMLHttpRequest();
		  }
		catch (e)
		  {
		  // Internet Explorer
				  try
							{
						 httpxml=new ActiveXObject("Msxml2.XMLHTTP");
							}
					catch (e)
							{
						try
					{
					httpxml=new ActiveXObject("Microsoft.XMLHTTP");
					 }
						catch (e)
					{
					alert("Your browser does not support AJAX!");
					return false;
					}
					}
		  }
		function stateck() 
		{
			if(httpxml.readyState==4)
			{
		
				var states=JSON.parse(httpxml.responseText);
				var options = new Array();

				for (i=0;i<states.length;i++)
				{
					options[i]={text:states[i]['name'], value:states[i]['id']};
					if(states.length <=1)
						Ext.getCmp('states').disabled = "disabled";
					else
						Ext.getCmp('states').disabled = false;
				} 
				Ext.getCmp('states').setOptions(options);
			}
		}
		
		var url="http://54.251.40.149/functions/getCountries.php";
		url=url+"?country="+country;
		httpxml.onreadystatechange=stateck;
		httpxml.open("GET",url,true);
		httpxml.send(null);
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
		newUser.set("location", newValues.state);       		
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
				Ext.Msg.alert("", reader.getMessage(raw), Ext.emptyFn);
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
		this.login = Ext.create("CrossView.model.Login", {
			email: "",
			password: ""
		});
		var loginView = this.getLoginView(); 
		var newValues = loginView.getValues();
		this.login.set("email",newValues.email);
		this.login.set("password",newValues.password);
		
		// validation
		var errors = this.login.validate(); 
		
		
		if(!errors.isValid()){
			Ext.Msg.alert("", errors.getAt(0).getMessage(), Ext.emptyFn);
			this.login.reject();
			return;
		}
		
		// server
		this.login.save({
			failure: function(){
				var proxy = this.login.getProxy(),
					reader = proxy.getReader(),
					raw = reader.rawData;
				Ext.Msg.alert("", reader.getMessage(raw), Ext.emptyFn);
			},
			success: function(){
				//Ext.Msg.alert("","Login successful!", Ext.emptyFn);
				this.activateHomeView();
			}
		},this);
	},
	onShowStatesCommand: function(){
		console.log("onShowStatesCommand");
		var signUpView = this.getSignUpView();
		var newValues=signUpView.getValues();
		this.getStates(newValues.country);
	}
});