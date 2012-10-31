Ext.define('CrossView.view.InviteUserList',{
	extend: 'Ext.dataview.DataView',
	xtype:'inviteuserlist',

	requires:[
		'CrossView.view.InviteUserItem'
	],

	config:{
		useComponents: true,
		cls: 'invitation-list',
		store:'InviteUsers',
		defaultType: 'inviteuseritem'
	}
});