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
	        id: 'yapps-01'
	    }	    
	});

	onlineStore.addListener('load', function (store, records, successful) {
		if (successful) {
		    offlineStore.getProxy().clear();
		    
		    for(var i=0; i<records.length; i++)
		    		records[i].setDirty();
		    
	        var o = offlineStore.add(records);
		    var o1 = offlineStore.sync();
		    orderList.setStore(offlineStore);
		}
	});
	
	orderList = Ext.create('Ext.List', {
		title: 'Orders',
	    itemTpl: '<tpl for="."><div>{orderNbr} <b>{description}</b></div></tpl>',
	    onItemDisclosure: function(){
		    	var orderTabPnl = Ext.getCmp('ordertab-pnl-id');
		    	var orderLinesPnl = Ext.getCmp('orderlines-pnl-id');
	    		if (!Ext.isEmpty(orderLinesPnl))
	    			orderTabPnl.remove(orderLinesPnl);
	    		
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
	    	
	    	orderTabPnl.insert(1, orderLinesPnl);
		orderTabPnl.setActiveItem(1);
	    },
	    store: onlineStore
	});

	var orderTab = Ext.create('Ext.TabPanel', {
	id: 'ordertab-pnl-id',
	title: 'List',
    ui        : 'light',
    items: [orderList]
	});
		
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