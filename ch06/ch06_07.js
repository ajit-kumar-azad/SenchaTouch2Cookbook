Ext.application({
	name : 'MyApp',
	
    launch: function() {
		var data = {
		    items: [{
		        text: 'Flowers',
		        items: [{
		            text: 'Roses',
		            items: [{
		                text: 'Red',
		                leaf: true
		            },{
		                text: 'Peach',
		                leaf: true
		            },{
		                text: 'Yellow',
		                leaf: true
		            }]
		        },{
		            text: 'Daffodils',
		            leaf: true
		        },{
		            text: 'Hibiscus',
		            leaf: true
		        }]
		    },{
		        text: 'Animals',
		        items: [{
		            text: 'Lion',
		            leaf: true
		        },{
		            text: 'Elephant',
		            leaf: true
		        }]
		    },{
		        text: 'Birds',
		        items: [{
		            text: 'Eagle',
		            leaf: true
		        },{
		            text: 'Hamsa',
		            leaf: true
		        },{
		            text: 'Pegion',
		            leaf: true
		        }]
		    }]
		};
		Ext.define('MyApp.model.ListItem', {
			extend: 'Ext.data.Model',
			config: {
				fields: [{name: 'text', type: 'string'}]
			}
		});
		var store = Ext.create('Ext.data.TreeStore', {
		    model: 'MyApp.model.ListItem',
		    root: data,
		    defaultRootProperty: 'items'
		});
		var nestedList = Ext.create('Ext.NestedList', {
		    fullscreen: true,
		    title: 'Fauna & Flora',
//		    displayField: 'text',
//		    useTitleAsBackText: false,
//		    useToolbar: false,
		    store: store
		});
    }
});