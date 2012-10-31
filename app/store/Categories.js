Ext.define("CrossView.store.Categories", {
	extend: "Ext.data.Store",
	requires: ["CrossView.model.Category"],
	config: {
		model: "CrossView.model.Category",
		data:[
			{id:'1', name:'Food'},
			{id:'2', name:'Scenery'},
			{id:'3', name:'Night Life'},
			{id:'4', name:'People'},
			{id:'5', name:'Sports'},
			{id:'6', name:'Buildings'},
			{id:'7', name:'Daily Life'},
			{id:'8', name:'Others'}
		]
	}
});