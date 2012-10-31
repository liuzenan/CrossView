Ext.define("CrossView.store.SearchLocations", {
	extend: "Ext.data.Store",
	requires: ["CrossView.model.Location"],
	config: {
		model: "CrossView.model.Location",
		data:[
			{name:'aaa'},
			{name:'bbb'},
			{name:'ccc'},
			{name:'aaa'},
			{name:'bbb'},
			{name:'ccc'},
			{name:'aaa'},
			{name:'bbb'},
			{name:'ccc'},
			{name:'aaa'},
			{name:'bbb'},
			{name:'ccc'}
		]
	}
});