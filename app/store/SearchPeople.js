Ext.define("CrossView.store.SearchPeople", {
	extend: "Ext.data.Store",
	requires: ["CrossView.model.User"],
	config: {
		model: "CrossView.model.User",
		data:[
			{firstname:'aaa', lastname:'asdfasdf'},
			{firstname:'aaa', lastname:'asdfasdf'},
			{firstname:'aaa', lastname:'asdfasdf'},
			{firstname:'aaa', lastname:'asdfasdf'},
			{firstname:'aaa', lastname:'asdfasdf'},
			{firstname:'aaa', lastname:'asdfasdf'},
			{firstname:'aaa', lastname:'asdfasdf'}
		]
	}
});