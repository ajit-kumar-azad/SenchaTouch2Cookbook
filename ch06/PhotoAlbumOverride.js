Ext.override(Touch.book.ux.PhotoAlbum, {
	loadData : function(data) {
		if (this.store.getCount() > 0) {
			Ext.Msg.alert('Info', 'The view is already loaded with data. No action will be performed.');
		} else {
 			this.store.loadData(data);
 		}
 	}
});