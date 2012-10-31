Ext.define('CrossView.view.InvitationList',{
	extend: 'Ext.dataview.DataView',
	xtype:'invitationlist',

	requires:[
		'CrossView.view.InvitationItem'
	],

	config:{
		useComponents: true,
		cls: 'inivitation-list',
		store:'Invitation',
		defaultType: 'invitationitem'
	}
});