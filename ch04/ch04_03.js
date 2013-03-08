Ext.application({
	name : 'MyApp',

	launch : function() {
		var data = [{
			album:'rose',
			url:'http://images.flowers.vg/250x300/rdroses01.jpg',
			title:'Rose 1',
			about:'Peach'}, {
			album:'rose',
			url:'http://images.flowers.vg/250x300/roses-maroon3.jpg',
			title:'Rose 2',
			about:'Red'}, {
			album:'rose',
			url:'http://images.flowers.vg/250x300/roses-dark-pink.jpg',
			title:'Rose 3',
			about:'Pink'}, {
			album:'rose',
			url:'http://images.flowers.vg/250x300/roses-bright-orange.jpg',
			title:'Rose 4',
			about:'Orange'}, {
			album:'daffodil',
			url:'http://images.flowers.vg/250x300/daffodil.jpg',
			title:'Daffodil 1',
			about:'Yellow'}, {
			album:'daffodil',
			url:'http://images.flowers.vg/250x300/daffodil-yellow.jpg',
			title:'Daffodil 2',
			about:'Small'}, {
			album:'daffodil',
			url:'http://images.flowers.vg/250x300/daffodil-white-orange.jpg',
			title:'Daffodil 2',
			about:'Orange'}, {
			album:'daffodil',
			url:'http://images.flowers.vg/250x300/winter_flowers_daffodil_white.jpg',
			title:'Daffodil 2',
			about:'Winter'}, {
			album:'hibiscus',
			url:'http://images.flowers.vg/250x300/hibiscus-peach.jpg',
			title:'Hibiscus 1',
			about:'Peach'}, {
			album:'hibiscus',
			url:'http://images.flowers.vg/250x300/hibiscusred.jpg',
			title:'Hibiscus 1',
			about:'Red'}, {
			album:'hibiscus',
			url:'http://images.flowers.vg/250x300/hibiscus-pink-pink.jpg',
			title:'Hibiscus 1',
			about:'Pink'}, {
			album:'hibiscus',
			url:'http://images.flowers.vg/250x300/hibiscus-red-maroon.jpg',
			title:'Hibiscus 1',
			about:'Maroon'}, {
			album:'hibiscus',
			url:'http://images.flowers.vg/250x300/hibiscus-pink-pink.jpg',
			title:'Hibiscus 1',
			about:'Pink'}, {
			album:'hibiscus',
			url:'http://images.flowers.vg/250x300/hibiscus-red-bright.jpg',
			title:'Hibiscus 1',
			about:'Bright Red'}];

		var pnl = Ext.create('Ext.Panel', {
			fullscreen: true,
			tpl: new Ext.XTemplate('<tpl>',
					'<tpl for="items">',
					'<tpl if="album==parent.filter && this.matchFound()">',
					'<div style="float:left;margin:10px;border:solid;">',
					'<img border="0" src={url} title={title} width="100" height="80" />',
						'<p>{about}</p>',
					'</div></tpl></tpl>',
					'<tpl if="this.isMatchNotFound()">',
					'<h1>No match found!!',
					'</tpl></tpl>',
					{
						found: false,
						matchFound: function(){
							this.found = true;
							return this.found;
						},
						isMatchNotFound: function(){
							return this.found ? false: true;
						}
					}),
			data: {filter: 'rose', items: data}
		});
	}
});
