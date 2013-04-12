Ext.application({
	name : 'MyApp',

	launch: function() {
    
    var orderList, onlineStore, offlineStore;

 	Ext.define('OrderLine', {
 		extend: 'Ext.data.Model',
 		config: {
 			fields: ['id', 'product', 'description', 'orderedQty', 'uom', 'price', 'lineNo']
 		}
	});

 	Ext.define('Order', {
 		extend: 'Ext.data.Model',
 		config: {
		    fields: [
		    	'id',
		        {name: 'orderNbr',  type: 'int', mapping: 'documentNo'},
		        {name: 'description',   type: 'string'},
		        {name: 'dateOrdered', type: 'string'},
		        {name: 'customer', type: 'string'},
		        {name: 'customerLocation', type: 'string'},
		        {name: 'isNewOrder', type: 'boolean', defaultValue: true}
		    ],
		    //association with order lines
		    hasMany: {model: 'OrderLine', name: 'orderlines', associationKey:'orderlines'},
		    proxy: {
		        type: 'ajax',
		        url : 'ch08/orders.json',
		        reader: {
		            type: 'json',
		            rootProperty: 'orders',
		            totalProperty: 'totalRecords',
		            successProperty: 'success'
		        },
		        timeout: 2000,
				listeners: {
				    exception:function (proxy, response, operation) {
				    		//fallback to the offline store
				        orderList.setStore(offlineStore);
				        offlineStore.load();
				    }
				}
		    }
 		}
	});
	
	onlineStore = Ext.create('Ext.data.Store', {
	    model: 'Order'
	});

	offlineStore = Ext.create('Ext.data.Store', {
	    model: 'Order',
	    autoSync: true,
	    proxy: {
	        type: 'localstorage',
	        id: 'yapps-01'	//unique id
	    }	    
	});

	//populate the offline store with the data read from the online store
	onlineStore.addListener('load', function (store, records, successful) {
		if (successful) {
			//clear old records
		    offlineStore.getProxy().clear();
		    
		    //since id is already populated on the 
		    //records, mark the records dirty otherwise
		    //they will not be saved
		    for(var i=0; i<records.length; i++)
		    		records[i].setDirty();
		    
	        offlineStore.add(records);
	        //save records in localstorage
		    offlineStore.sync();
		    orderList.setStore(offlineStore);
		}
	});
	
	orderList = Ext.create('Ext.List', {
		title: 'Orders',
	    itemTpl: '<tpl for="."><div>{orderNbr} <b>{description}</b></div></tpl>',
	    
	    //show order lines when disclose icon is tapped on an order entry
	    onItemDisclosure: function(){
	    	
		    	var orderTabPnl = Ext.getCmp('ordertab-pnl-id');
		    	var orderLinesPnl = Ext.getCmp('orderlines-pnl-id');
		    	
		    	//we might have already shown the order line tab. if so, destroy it
	    		if (!Ext.isEmpty(orderLinesPnl))
	    			orderTabPnl.remove(orderLinesPnl);
	    		
	    		//get order lines from the order object, which we had loaded from json file
	    		var ols = [];
	    		arguments[0].orderlines().each(function(ol) {
	    			ols.push(ol);
	    		});
	    		
	    		orderLinesPnl = Ext.create('Ext.List', {
		    		id: 'orderlines-pnl-id',
				title: 'Order Lines',
			    itemTpl: '<tpl for="."><div style="padding-left:10px;">{lineNo} - {product} <b>{orderedQty}</b></div></tpl>',
			    store: Ext.create('Ext.data.Store', {
				    model: 'OrderLine',
				    data : ols
				})
			});
	    	
	    		//show the Order Lines tab
		    	orderTabPnl.insert(1, orderLinesPnl);
			orderTabPnl.setActiveItem(1);
	    },
	    store: onlineStore
	});

	//Order tab panel with Order and Order Lines tabs
	var orderTab = Ext.create('Ext.TabPanel', {
		id: 'ordertab-pnl-id',
		title: 'List',
	    ui        : 'light',
	    items: [orderList]
	});
	
	//Main tab panel
	Ext.create('Ext.TabPanel', {
		id: 'tab-pnl-id',
	    fullscreen: true,
	    ui        : 'light',
	    sortable  : true,
	    items: [orderTab,
	        {
	            title: 'Help',
	           	html: '<h1 style="font-size:16px;"><b>Help</b></h1><p>This application shows the orders and their line items.</p>',
	            styleHtmlContent: true
	        },
	        {
	            title: 'About',
	            html : '<h1 style="font-size:16px;"><b>About this app!</b></h1><p>Version 0.1</p>',
	            styleHtmlContent: true
	        }
	    ]
	});
	

	onlineStore.load();

    }
});