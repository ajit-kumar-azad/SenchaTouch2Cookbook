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
                            pnl.remove(Ext.getCmp('email-id'));
                            var tb = pnl.down('toolbar[docked=top]');
                            tb.hide();
                            //pnl.remove(tb);
                        }
                    }, {
                        text: 'Add',
                        ui: 'confirm',
                        handler: function() {
                        	pnl.add([{
						          xtype: 'emailfield',
                        		  id: 'email-id',
						          name : 'email',
						          label: 'E-mail'
						    }, {
					            xtype : 'toolbar',
					            docked: 'top',
					            items: [{
					            		text: 'Dummy'
					            }]
					    }]);
//                        	pnl.insert(5, [{
//						          xtype: 'emailfield',
//                        		  	  id: 'email-id',
//						          name : 'email',
//						          label: 'E-mail'
//						    }, {
//					            xtype : 'toolbar',
//					            docked: 'top',
//					            items: [{
//					            		text: 'Dummy'
//					            }]
//					    }]);
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
