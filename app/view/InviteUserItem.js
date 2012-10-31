Ext.define('CrossView.view.InviteUserItem',{
	extend: 'Ext.dataview.component.DataItem',
	requires:[
		'Ext.Button',
		'Ext.Img'
	],
	xtype:'inviteuseritem',
	config:{
		cls:'invitation-list-item',
		dataMap:{
			getImage: {setSrc:'profilePic'},
			getFirstName: {setHtml:'firstname'},
			getLastName:{setHtml:'lastname'},
			getInvite:true
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

		invite:{
			cls:'acceptbtn',
			text:'Invite',
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

	applyInvite: function(config){
		return Ext.factory(config, Ext.Button, this.getInvite());
	},

	updateInvite: function(newName, oldName){
		if(newName){
			this.add(newName);
		}
		if(oldName){
			this.remove(oldName);
		}
	}
});