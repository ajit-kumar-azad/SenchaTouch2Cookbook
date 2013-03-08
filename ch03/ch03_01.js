Ext.application({
	name : 'MyApp',

	launch : function() {
		var pnl = Ext.create('Ext.Container', {
			fullscreen : true,
			layout: 'card',
			activeItem: 0,
			items : [ {
				style : 'background:grey;',
				html : '<p>Panel 1</p>'
			}, {
				xtype : 'textfield',
				name : 'first',
				label : 'First name'
			}, {
				xtype : 'textfield',
				name : 'last',
				label : 'Last name'
			}, {
				xtype : 'numberfield',
				name : 'age',
				label : 'Age'
			}, {
				xtype : 'urlfield',
				name : 'url',
				label : 'Website'
			} ]
		});
	}
});
