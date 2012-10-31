Ext.define("CrossView.store.Conversations", {
	extend: "Ext.data.Store",
	requires: ["CrossView.model.Conversation"],
	config: {
		model: "CrossView.model.Conversation",
		data:[
			{caption:'asdfasdf'},
			{caption:'asdfasdf'},
			{caption:'asdfasdf'},
			{caption:'asdfasdf'},
			{caption:'asdfasdf'},
			{caption:'asdfasdf'}
		]
	}
});