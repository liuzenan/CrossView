Ext.define("CrossView.store.NewPosts", {
	extend: "Ext.data.Store",
	requires: ["CrossView.model.Post"],
	config: {
		model: "CrossView.model.Post",
		data:[
			{name:'asdfasdf'},
			{name:'asdfasdf'},
			{name:'asdfasdf'},
			{name:'asdfasdf'},
			{name:'asdfasdf'},
			{name:'asdfasdf'}
		]
	}
});