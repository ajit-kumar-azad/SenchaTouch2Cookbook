Ext.define('Touch.book.ux.PhotoAlbumPlugIn', {
	extend: 'Ext.Component',
	alias: 'plugin.photoalbum-view',
	
	init: function(viewCmp) {
		viewCmp.setItemTpl(new Ext.XTemplate(
			    '<tpl for=".">',
			        '<div class="thumb-wrap" id="{title}">',
			        '<div class="thumb"><img src="{url}" title="{title}"></div>',
			        '<span>{title}</span></div>',
			    '</tpl>',
			    '<div class="x-clear"></div>'
			));
		}
});