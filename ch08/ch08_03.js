//Ext.Loader.setPath({
//    'Ext.io': 'sencha-io-0.7.15/src/io',
//    'Ext.cf': 'sencha-io-0.7.15/src/cf'
// });

Ext.application({
	name : 'MyApp',
	
//	requires: ["Ext.io.ux.AuthButton"],
//	
//	controllers: ['Ext.io.Controller'],
	
	io: {
		appId:'5edf1ccb-d658-480d-ac29-0039a9096f55',
		appSecret: 'ddlTwUKn3e3TXeMW'
	},
	
	launch: function() {
    
    var orderList, syncStore;

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
		    ]
 		}
	});
	
	syncStore = Ext.create('Ext.data.Store', {
	    model: 'Order',
	    autoLoad: true,
	    autoSync: false, //wait for the authentication
	    proxy: {
	        type: 'syncstorage',
	        owner: 'user',
            access: 'private',
	        id: 'ioorders'
	    }	    
	});

	orderList = Ext.create('Ext.List', {
		title: 'Orders',
	    itemTpl: '<tpl for="."><div>{orderNbr} <b>{description}</b></div></tpl>',
	    store: syncStore
	});
	
	Ext.create('Ext.TabPanel', {
	id: 'ordertab-pnl-id',
	fullscreen: true,
	title: 'List',
    ui        : 'light',
    items: [orderList, {
        		docked: 'bottom',
        		xtype: 'titlebar',
        		items: [{
        			text: 'Load Data',
        			align:'right',
        			handler: function() {
        				var rec = Ext.create('Order', {
    				    		orderNbr: 1,
    				    		documentNo: '80001',
    				    		description: 'Order for 2 Patio furniture sets',
    				    		customer: 'Ajit Kumar',
    				    		customerLocation: ''
        				});
        				syncStore.add(rec);
        				syncStore.sync();
        			}
        		}/*, {
              xtype: "sioAuthButton",
              align: "right"
            }*/]
    		}]
	});

    }
});