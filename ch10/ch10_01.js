Ext.application({
	name : 'MyApp',
	
	requires: ['Ext.device.Camera'],

	launch: function() {
		
		var tpl = new Ext.XTemplate(
			    '<tpl for=".">',
			        '<div class="thumb"><img src="{url}"></div>',
			    '</tpl>'
			);
		
		var data = [];
		
		var store = Ext.create('Ext.data.Store', {
			fields: ['url'],
			data: data
		});
		var dv = Ext.create('Ext.DataView', {
	        store: store,
	        scrollable: 'vertical',
	        itemTpl: tpl,
	        singleSelect: true,
	        overItemCls:'x-view-over',
	        itemSelector:'div.thumb-wrap',
	        emptyText: 'No images to display'
		});
		
    
		Ext.create('Ext.Panel', {
			id:'images-view',
		    fullscreen: true,
		    layout: 'fit',
		    items: [dv, {
		    		xtype: 'toolbar',
		    		docked: 'bottom',
		    		items: [{
		    			text: 'Capture Photo',
		    			handler: function() {
		    				Ext.device.Camera.capture({
		    				   success: function(image) {
		    				        Ext.Msg.alert('Url', image);
		    				        data.push({url: image});
		    				        store.applyData(data);
		    				    },
		    				    failure: function(msg) {
		    				    		Ext.Msg.alert('Error', 'Failed to capture photo: ' + msg);
		    				    },
		    				    quality: 75,
		    				    destination: 'file',
		    				    source: 'camera'
		    				});
		    			}
		    		}, {
		    			text: 'Select Media',
		    			handler: function() {
		    				Ext.device.Camera.capture({
		    				   success: function(image) {
		    				        Ext.Msg.alert('Url', image);
		    				        data.push({url: image});
		    				        store.applyData(data);
		    				    },
		    				    failure: function(msg) {
		    				    		Ext.Msg.alert('Error', 'Failed to fetch photo: ' + msg);
		    				    },
		    				    quality: 75,
		    				    destination: 'file',
		    				    source: 'library'
		    				});
		    			}
		    		}]
		    }]
		});

	}							
});