Ext.define('CrossView.model.Conversation', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            "id",
            "lastupdate",
            "totalPost",
            "totalUnread",
            "numOfLocations",
            "involved",
            "invited",
            "latestPost"
        ],
        
		proxy: {
			type: 'rest',
			url: 'http://54.251.40.149/functions/conversation',
            reader:{
                type:'json',
                rootProperty:'conversation',
                messageProperty: 'message'
            },
            extraParams: {
            	pageNum: 1
            }
		}
    }
});