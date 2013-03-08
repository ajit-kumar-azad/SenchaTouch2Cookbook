Ext.application({
	name : 'MyApp',

	launch : function() {
		
		var pnl = Ext.create('Ext.Panel', {
		    fullscreen: true,
		    styleHtmlContent: true,
		    layout: {
		    		type: 'vbox'
		    },
		    defaults: {
		    		styleHtmlContent: true
		    },
		    items: [{
		        flex: 2,
		        style: 'background:#E58A99;',
		        layout: {
			        type: 'hbox'
			    },
			    items: [{
			        flex: 2,
			        style: 'background:#E58A99;',
			        layout: 'fit',
			        items: [{
			            xtype: 'textareafield',
			            name : 'url',
			            label: 'Note'
			        }]
			    },{
			        width: 100,
			        html: 'Second',
			        style: 'background:#65B9E0;'
			    },{
			        flex: 1,
			        html: 'Third',
			        style: 'background:#B7E488;'
			    }]
		    },{
		        height: 100,
		        html: 'Top-Second',
		        style: 'background:#65B9E0;'
		    },{
		        flex: 1,
		        html: 'Top-Third',
		        style: 'background:#B7E488;'
		    }]
		});
	}
});
