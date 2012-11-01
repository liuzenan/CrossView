Ext.define('CrossView.controller.NavCtrl',{
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			homepage : 'homepage',
			chatpage : 'chatpage',
			searchpage : 'searchpage',
			conversationpage: 'conversationpage',
			mepage : 'mepage'
		},

		control:{
			chatpage:{
				ConversationCmd : 'onConversationCmd'
			},
			conversationpage:{
				ConversationBackCmd: 'onConversationBackCmd'
			}
		}
	},
	slideLeftTransition: {type: 'slide', direction: 'left'},
	onConversationCmd: function(){
		
		var chatpage = this.getChatpage();
		chatpage.push(new CrossView.view.ConversationPage());
	},
	onConversationBackCmd: function(){
		console.log("back command");
		var chatpage = this.getChatpage();
		chatpage.pop();
	},

	takePhotoCommand: function(){

     console.log("fuck.js");
Ext.device.Camera.capture({
     source: 'camera',
     destination: 'data',


     success: function(image) {
          var jsonFile= {
               file : image,
               filename : "senchatesting.jpg"
          };
               alert(image);  
          Ext.Ajax.request({
               url: 'http://192.168.80.24/drupalsite/rest/file',
               methode: 'POST',
               jsonData : jsonFile,
               success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);
               },
               failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
               }
          });
     },
             
     failure: function(result) {
          Ext.device.Notification.show({
               title: 'Error',
               message: result
          });
     }
});

	}
});