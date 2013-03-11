Ext.define('Touch.book.ux.PhotoAlbumOverride', {
	override: 'Touch.book.ux.PhotoAlbum',
	
	loadData : function(data) {
		if (this.getStore().getCount() > 0) {
			Ext.Msg.alert('Info', 'The view is already loaded with data. No action will be performed.');
		} else {
 			this.getStore().setData(data);
 		}
 	}
});
