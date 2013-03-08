Ext.application({
	name : 'MyApp',

	launch : function() {
		
		var pnl = Ext.create('Ext.Panel', {
		    fullscreen: true,
		    styleHtmlContent: true,
		    layout: 'fit',
		    items: [{
		        style: 'background:#E58A99',
		        html: '<p>Panel 1</p>'
		    }]
		});
	}
});
