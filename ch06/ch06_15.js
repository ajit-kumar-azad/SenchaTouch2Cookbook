Ext.setup({
    onReady: function() {
        
    var data = [{
				album:'rose',
				url:'http://www.pictures.vg/vgflowers/400x300/flowers_pics_4870.jpg',
				title:'Rose 1',
				about:'Peach'}, {
				album:'rose',
				url:'http://www.pictures.vg/vgflowers/400x300/redroses08.jpg',
				title:'Rose 2',
				about:'Red'}, {
				album:'rose',
				url:'http://www.pictures.vg/vgflowers/400x300/abflowers5613.jpg',
				title:'Rose 3',
				about:'Pink'}, {
				album:'rose',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers0399.jpg',
				title:'Rose 4',
				about:'Orange'}, {
				album:'daffodil',
				url:'http://www.pictures.vg/vgflowers/400x300/daff001.jpg',
				title:'Daffodil 1',
				about:'Yellow'}, {
				album:'daffodil',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers0484.jpg',
				title:'Daffodil 2',
				about:'Small'}, {
				album:'daffodil',
				url:'http://www.pictures.vg/vgflowers/400x300/abflowers2232.jpg',
				title:'Daffodil 2',
				about:'Orange'}, {
				album:'daffodil',
				url:'http://www.pictures.vg/vgflowers/400x300/abflowers7230.jpg',
				title:'Daffodil 2',
				about:'Winter'}, {
				album:'hibiscus',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers4214.jpg',
				title:'Hibiscus 1',
				about:'Peach'}, {
				album:'hibiscus',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers3250.jpg',
				title:'Hibiscus 1',
				about:'Red'}, {
				album:'hibiscus',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers2631.jpg',
				title:'Hibiscus 1',
				about:'Pink'}, {
				album:'hibiscus',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers5645.jpg',
				title:'Hibiscus 1',
				about:'Maroon'}, {
				album:'hibiscus',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers0577.jpg',
				title:'Hibiscus 1',
				about:'Pink'}, {
				album:'hibiscus',
				url:'http://www.pictures.vg/vgflowers/400x300/cflowers3224.jpg',
				title:'Hibiscus 1',
				about:'Bright Red'}];

	var store = new Ext.data.JsonStore({
	    mode: 'local',
	    fields: [
	        'url', 'title','about'
	    ]
	});
	
	var photoPnl = new Touch.book.ux.PhotoAlbum({
	    	data: data,
	    	store: store,
	    	plugins: [new Touch.book.ux.PhotoAlbumPlugIn()]
	    });
	
	var pnl = new Ext.Panel({
		id:'images-view',
	    fullscreen: true,
	    scroll: false,
    	monitorOrientation: true,
	    defaults: {
	        border: false
	    },
	    items: [photoPnl]
	});
    }
});