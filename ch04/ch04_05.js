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

		var store = Ext.create('Ext.data.Store', {
		    data: data,
		    fields: [
		        'url', 'title','about', 'album'
		    ]
		});
		
		var filter = function(criteria) {
			store.clearFilter();
			return store.filterBy(function(record, id){
		                		if (record.get('album') === criteria || Ext.isEmpty(criteria))
		                			return true;
		                		else
		                			return false;
		                	});
		};

		var tpl = new Ext.XTemplate(
		        '<div class="thumb-wrap" id="{title}">',
		        '<div class="thumb"><img src="{url}" title="{title}"></div>',
		        '<span>{about}</span></div>',
			    '<div class="x-clear"></div>');
		
		Ext.create('Ext.dataview.DataView', {
			id:'images-view',
			fullscreen: true,
		    store: store,
		    itemTpl: tpl,
		    emptyText: 'No images to display',
		    items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        text: 'Rose',
                        id: 'rose-button',
                        handler: function() {
                            filter('rose');
                        }
                    },
                    {
                        text: 'Daffodil',
                        id: 'daffodil-button',
                        handler: function() {
                        	filter('daffodil');
                        }
                    },{
                        text: 'Hibiscus',
                        id: 'hibiscus-button',
                        handler: function() {
                            filter('hibiscus');
                        }
                    },{
                        text: 'Reset',
                        id: 'reset-button',
                        ui: 'confirm',
                        handler: function() {
                        		Ext.getCmp('images-view').setActiveItem(0);
                            filter('');
                        }
                    }, {
                        text: 'Back',
                        id: 'back-button',
                        ui: 'back',
                        hidden: true,
                        handler: function() {
                            Ext.getCmp('images-view').setActiveItem(0);
                            this.hide();
                            Ext.getCmp('rose-button').show();
		        				Ext.getCmp('daffodil-button').show();
		        				Ext.getCmp('hibiscus-button').show();
                        }
                    }
                ]
            }]
		});
	}
});
