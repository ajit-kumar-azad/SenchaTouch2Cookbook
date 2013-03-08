Ext.application({
	name : 'MyApp',

	launch : function() {
		
		var pnl = Ext.create('Ext.Panel', {
		    fullscreen: true,
		    styleHtmlContent: true,
		    items: [{
		    		docked : 'top',
		        style: 'background:grey',
		        html: '<p>Panel 1</p>'
		    },{
		    		docked : 'bottom',
		        style: 'background:blue',
		        html: '<p>Panel 2</p>'
		    },{
		    		docked : 'right',
		        style: 'background:green',
		        html: '<p>Panel 3</p>'
		    },{
		    		docked : 'left',
		        style: 'background:yellow',
		        html: '<p>Panel 4</p>'
		    }]
		});
	}
});
