Ext.application({
	name : 'MyApp',

	launch : function() {
		var pnl = Ext.create('Ext.Panel', {
			fullscreen : true,
			items : [{
                xtype: 'toolbar',
                docked: 'bottom',
                items: [{
                        text: 'Reset',
                        handler: function() {
                            
                        }
                    }, {
                        text: 'Save',
                        ui: 'confirm',
                        handler: function() {
                        	Ext.Msg.alert("INFO", "In real implementation, this will be saved!");
                        }
                    }, {
                    		text: 'Help',
                    		handler: function(btn) {
                    			Ext.create('Ext.Panel', {
                    			     html: 'This is a floating panel!',
                    			     left: 0,
                    			     padding: 10
                    			 }).showBy(btn);
                    		}
                    }]
            }, {
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
