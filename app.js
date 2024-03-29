Ext.application({
    name: 'CrossView',

    requires: [
        'Ext.MessageBox'
    ],

    models:["User", "Login","Category","Conversation","Location","Post","Picture"],
    controllers:["UserCtrl","NavCtrl", "PostCtrl"],
    stores:[
    'Users',
    'Invitation',
    'Featured',
    'NewPosts',
    'Conversations',
    'ConversationPosts',
    'InviteUsers',
    'SearchPeople',
    'SearchLocations',
    'RecentPosts',
    'Categories'
    ],

    views: [
    'Welcome',
    'Login',
    'SignUp',
    'Tour',
    'Home',
    'HomePage', 
    'ChatPage', 
    'SearchPage',
    'MePage',
    'ConversationPage',
    'AddUser',
    'NewPost',
    'PostDetail',
    'UploadPage'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view

       var welcomeView = {
            xtype:"welcomeview"
        };
     //  this.loadCountries();
       var homeView = {
               xtype: "homeview"
       };
       var newPostView = {
                xtype: "newpost"
       };
       
        Ext.Viewport.add([homeView,newPostView]);

    },

    //Helper functions
    loadCountries: function(){
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
                
                var countries=eval(httpxml.responseText);
                var options = new Array();
            
                for (i=0;i<countries.length;i++)
                {
                    options[i]={text: countries[i], value: countries[i]};
                } 
                Ext.getCmp("countries").setOptions(options);
            }
        }
        
        var url="http://54.251.40.149/functions/getCountries.php";
        httpxml.onreadystatechange=stateck;
        httpxml.open("GET",url,true);
        httpxml.send(null);
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
