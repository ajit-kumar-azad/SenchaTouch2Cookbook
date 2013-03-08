Ext.define('Touch.book.ux.PhotoAlbum', {
	extend: 'Ext.dataview.DataView',
	xtype: 'photoalbum',
	config: {
		store: null,
		itemTpl : new Ext.XTemplate(
		        '<div class="thumb-wrap" id="{title}">',
		        '<div class="thumb"><img src="{url}" title="{title}"></div>',
		        '<span>{about}</span></div>',
			    '<div class="x-clear"></div>'
			),
	    scrollable: 'vertical',
	    emptyText: 'No images to display'
	},
	
//	initConfig:function(config){
//		Ext.apply(this.initialConfig,{
//			listeners: {
//				selectionchange: function(dv, recs) {
//						
//					if (recs.length > 0) {
//		        			Ext.Msg.alert('Info', 'Selected: ' + recs[0].data.album + ' : ' + recs[0].data.about);
//			        }
//				}
//			}
//		});
//		this.callParent(arguments);
//	},
	
	initialize: function() {
		this.callParent(arguments);
		
		this.on('selectionchange', function(dv, recs) {
			
			if (recs.length > 0) {
        			Ext.Msg.alert('Info', 'Selected: ' + recs[0].data.album + ' : ' + recs[0].data.about);
	        }
		});
	}
});