Ext.application({
	name : 'MyApp',
	
    launch: function() {
    
    	var selRecs;
    	
  	var actionSheet = Ext.create('Ext.ActionSheet', {
  		hidden: true,
	    items: [{
	            text: 'Cancel',
	            ui  : 'decline',
	            handler: function() {
	            	actionSheet.hide();
	            }
	        }, {
	            text: 'Detail',
	            handler: function() {
	            	var recs = selRecs;
        			Ext.getCmp('detail-panel').setHtml('<img src="' + recs[0].data.url + '" title="' + recs[0].data.title + '">');
        			Ext.getCmp('images-view').setActiveItem(1);
        			Ext.getCmp('back-button').show();
        			Ext.getCmp('rose-button').hide();
        			Ext.getCmp('daffodil-button').hide();
        			Ext.getCmp('hibiscus-button').hide();
        			actionSheet.hide();
	            }
	        },
	        {
	            text: 'Delete',
	            ui  : 'confirm',
	            handler: function(){
	            	Ext.Msg.confirm("Confirmation", "Are you sure you want to delete the picture?", function(btn){
	            		if (btn == "yes") {
	            			var dview = Ext.getCmp('images-data-view');
	            			var recs = selRecs;
	            			dview.getStore().remove(recs);
	            		}
            			actionSheet.hide();
	            	});
	            }
	        }
	    ]
	});

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

	var carousel = Ext.create('Ext.carousel.Carousel', {
		//direction: 'vertical',
        //indicator: false,
	    items: [{
	            id: 'detail-panel',
	            styleHtmlContent: true,
	            scrollable: 'vertical'
	        },
	        {
	        		styleHtmlContent: true,
	            html: '<h1 style="font-size:16px;"><b>About Roses</b></h1><p>The leaves are borne alternately on the stem. In most species they are 5 to 15 centimetres (2.0 to 5.9 in) long, pinnate, with (3–) 5–9 (–13) leaflets and basal stipules; the leaflets usually have a serrated margin, and often a few small prickles on the underside of the stem. Most roses are deciduous but a few (particularly from South east Asia) are evergreen or nearly so.</p>'
	        },
	        {
	        		styleHtmlContent: true,
	            html: '<h1 style="font-size:16px;"><b>Uses</b></h1><p>Roses are best known as ornamental plants grown for their flowers in the garden and sometimes indoors. They have been also used for commercial perfumery and commercial cut flower crops. Some are used as landscape plants, for hedging and for other utilitarian purposes such as game cover and slope stabilization. They also have minor medicinal uses.</p>'
	        }]
	});
		
	Ext.create('Ext.Panel', {
		id:'images-view',
	    fullscreen: true,
	    layout: 'card',
	    items: [actionSheet, Ext.create('Ext.dataview.DataView', {
	    			id: 'images-data-view',
		        store: store,
		        scrollable: 'vertical',
		        itemTpl: tpl,
		        emptyText: 'No images to display',
		        listeners: {
		        	selectionchange: function(dv, recs) {
		        		if (recs.length > 0) {
		        			selRecs = recs;
		        			actionSheet.show();
			        }
		        	}
		        }
		    }), carousel, {
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
                    ui: 'decline-round',
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