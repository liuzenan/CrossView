Ext.define('CrossView.view.InvitationItem',{
	extend: 'Ext.dataview.component.DataItem',
	requires:[
		'Ext.Button',
		'Ext.Img'
	],
	xtype:'invitationitem',
	config:{
		cls:'invitation-list-item',
		dataMap:{
			getImage: {setSrc:'profilePic'},
			getFirstName: {setHtml:'firstname'},
			getLastName:{setHtml:'lastname'},
			getAccept:true,
			getIgnore: true
		},

		layout:{
			type: 'hbox',
			align: 'center'
		},

		image: {
			width:60,
			height:60
		},

		firstName:{
			cls:'profile-first-name'
		},

		lastName:{
			cls:'profile-last-name',
			flex:2
		},

		accept:{
			cls:'acceptbtn',
			text:'Accept',
			flex:1
		},
		ignore:{
			cls:'ignorebtn',
			text:'Ignore',
			flex:1
		}

	},

	applyImage: function(config){
		return Ext.factory(config, Ext.Img, this.getImage());
	},
	updateImage: function(newImage, oldImage){
		if(newImage){
			this.add(newImage);
		}
		if(oldImage){
			this.remove(oldImage);
		}
	},


	applyFirstName: function(config){
		return Ext.factory(config, Ext.Component, this.getFirstName());
	},

	updateFirstName: function(newName, oldName){
		if(newName){
			this.add(newName);
		}
		if(oldName){
			this.remove(oldName);
		}
	},

	applyLastName: function(config){
		return Ext.factory(config, Ext.Component, this.getLastName());
	},

	updateLastName: function(newName, oldName){
		if(newName){
			this.add(newName);
		}
		if(oldName){
			this.remove(oldName);
		}
	},

	applyAccept: function(config){
		return Ext.factory(config, Ext.Button, this.getAccept());
	},

	updateAccept: function(newName, oldName){
		if(newName){
			this.add(newName);
		}
		if(oldName){
			this.remove(oldName);
		}
	},

	applyIgnore: function(config){
		return Ext.factory(config, Ext.Button, this.getIgnore());
	},

	updateIgnore: function(newName, oldName){
		if(newName){
			this.add(newName);
		}
		if(oldName){
			this.remove(oldName);
		}
	},
});