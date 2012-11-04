Ext.define('CrossView.view.PostDetail',{
	extend: 'Ext.navigation.View',
	requires:[
		'Ext.Button',
		'Ext.DataView'

	],
	xtype:'postdetail',
	config:{
		cls:'postdetail',
		navigationBar: {
		    items: [
		        {
		            xtype: 'button',
		            text: 'Profile',
		            align: 'right'
		        },
		        {
		            xtype: 'button',
		            id: 'postdetailbackbtn',
		            ui:'back',
		            text: 'Back',
		            align: 'left'
		        }
		    ],
		},
		items:[
		{
			title:'User name',
			scrollable:true,
			items:[
				{
					//xtype:'dataview',
					tpl: new Ext.Template(
						'<div class="postdetail_container">',
							'<img src="resources/images/post.jpg" width="100%"/>',
							'<div class="postdetail_des x-layout-hbox">',
								'<img class="postdetail_profile" src="resources/images/profile-pic.jpg"/>',
								'<div class="postdetail_text x-layout-box-item">',
								'<div class="x-layout-vbox">',
									'<div class="postdetail_title x-layout-hbox">',
										'<div class="postdetail_title_text x-layout-box-item">',
											'<h3>British Museum</h3>',
											'<p>Bob Trololol posted 3 hours ago</p>',
										'</div>',
										'<div class="postdetail_title_stats">',
											'<span class="postdetail_like">21</span>',
		                                    '<span class="postdetail_view">120</span>',
										'</div>',
									'</div>',
									'<p class="postdetail_content">',
										'asdfasdfasdfasd asdfasdf asdfas asdfa sdf asdfasdf asdfasdfasd',
									'</p>',
								'</div>',
								'</div>',
							'</div>',
						'</div>'
					),
					data:{}
				}	
			]
		}
		]
	}
});