Ext.define("CrossView.store.Conversations", {
	extend: "Ext.data.Store",
	config: {
		model: "CrossView.model.Conversation",
		data:[
			{caption:'asdfasdf',user:[{firstname:'alice'},{firstname:'bob'},{firstname:'david'}]},
			{caption:'asdfasdf',user:[{firstname:'alice'},{firstname:'bob'},{firstname:'david'}]},
			{caption:'asdfasdf',user:[{firstname:'alice'},{firstname:'bob'},{firstname:'david'}]},
			{caption:'asdfasdf',user:[{firstname:'alice'},{firstname:'bob'},{firstname:'david'}]},
			{caption:'asdfasdf',user:[{firstname:'alice'},{firstname:'bob'},{firstname:'david'}]},
			{caption:'asdfasdf',user:[{firstname:'alice'},{firstname:'bob'},{firstname:'david'}]}
		]
	}
});