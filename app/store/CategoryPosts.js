Ext.define("CrossView.store.CategoryPosts", {
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