Ext.define('CrossView.model.Conversation', {
    extend: 'Ext.data.Model',
    requires:['CrossView.model.User'],
    config: {
        fields: [
            "caption"
        ],
        hasMany:{
        	model: "CrossView.model.User",
        	associationKey: 'user'
        }
        
	}
});