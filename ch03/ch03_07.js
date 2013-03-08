Ext.application({
	name : 'MyApp',

	launch : function() {
		
		var pnl = Ext.create('Ext.Panel', {
		    fullscreen: true,
		    styleHtmlContent: true,
		    layout: {
		    		type: 'hbox',
		    		align: 'middle'
		    },
		    items: [{
		        flex: 3,
		        html: 'First',
		        style: 'background:#E58A99'
		    },{
		        width: 100,
		        html: 'Second',
		        style: 'background:#65B9E0'
		    },{
		        flex: 2,
		        html: 'Third',
		        style: 'background:#B7E488'
		    }]
		});
	}
});
