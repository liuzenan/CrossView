Ext.define('CrossView.view.LocationPage',{
	extend: 'Ext.navigation.View',
	requries:[
		'Ext.Button'
	],
	xtype:'locationpage',
	config:{
		navigationBar: {
		    items: [
		        {
		            xtype: 'button',
		            text: 'Details',
		            align: 'right'
		        },
		        {
		            xtype: 'button',
		            id: 'conversationbackbtn',
		            ui:'back',
		            text: 'Back',
		            align: 'left'
		        }
		    ],
		},
		items:[
			{
				title:'Location',
				scrollable:true,
				items:[
					{
					xtype:'dataview',
                    scrollable:false,
                    itemTpl: new Ext.Template(
                        '<div class="featured_post">',
                            '<div class="featured_post_title">',
                                '<img src="" class="feature_post_profile"/>',
                                '<div class="feature_post_title">',
                                    '<h3>British Museum, UK<h3>',
                                    '<p>Alice posted 3 hours ago</p>',
                                '</div>',
                            '</div>',
                            '<div class="featured_post_image">',
                                '<div class="post_stats">',
                                    '<span class="post_like">21</span>',
                                    '<span class="post_view">120</span>',
                                '</div>',
                            '</div>',
                        '</div>'
                    ),
                    store: 'LocationPosts'
					}
				]
			}
		]
	}
});