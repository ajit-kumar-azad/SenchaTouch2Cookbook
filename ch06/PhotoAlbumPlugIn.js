Touch.book.ux.PhotoAlbumPlugIn = Ext.extend(Ext.util.Observable, {

	init: function(viewCmp) {
		viewCmp.tpl = new Ext.XTemplate(
		    '<tpl for=".">',
		        '<div class="thumb-wrap" id="{title}">',
		        '<div class="thumb"><img src="{url}" title="{title}"></div>',
		        '<span>{title}</span></div>',
		    '</tpl>',
		    '<div class="x-clear"></div>'
		);
	}

});
