Ext.define("CrossView.store.Users", {
	extend: "Ext.data.Store",
	requires: "Ext.data.proxy.LocalStorage",
	config: {
		model: "CrossView.model.User",
		proxy: {
			type: 'rest',
			url: 'http://54.251.40.149/index.php'
		}
	}
});