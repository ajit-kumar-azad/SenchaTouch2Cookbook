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
		var nestedList = Ext.create('Ext.dataview.NestedList', {
		    fullscreen: true,
		    title: 'Fauna & Flora',
//		    displayField: 'text',
//		    useTitleAsBackText: false,
//		    useToolbar: false,
//		    backText: 'Prev',
		    onItemDisclosure: true,
		    listConfig: {
			    listeners: {
			    		disclose: function(list, record, target, index, e, eOpts) {
			    			nestedList.onItemTap( list, index, target, record, e );
			    		}
			    }
		    },
		    detailCard: {
		    		styleHtmlContent: true
		    },
		    store: store,
		    listeners: {
		    		leafitemtap: function(list, subList, idx, t, rec, e, eOpts) {
		    			var parentTxt = rec.parentNode.data.text;
		    			var detailCard = list.getDetailCard();
		    			detailCard.setHtml(Ext.String.format('<h1 style="font-size:16px;"><b>About {0} {1}</b></h1><p>This is where you can show more detail about - {0} {1}</p>', rec.data.text, parentTxt));
		    		}
		    }
		});
    }
});