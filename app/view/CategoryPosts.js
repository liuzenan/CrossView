Ext.define('CrossView.view.CategoryPosts',{
	extend: 'Ext.navigation.View',
	requires:[
	'Ext.DataView'
	],
	xtype:'categoryposts',
	config:{
		scrollable:true,
		navigationBar: {
			cls:'category-post-title'
		},
		items:[
		{
			xtype:'dataview',
			itemTpl: new Ext.Template(
				'<span class="profile-post-title">3 hours ago near British Museum, UK</span>',
				'<div class="profile-post-image">',
				'<div class="post_stats">',
				'<span class="post_like">21</span>',
				'<span class="post_view">120</span>',
				'</div>',
				'</div>'
				),
			store:'RecentPosts'
		}
		]
	}
});