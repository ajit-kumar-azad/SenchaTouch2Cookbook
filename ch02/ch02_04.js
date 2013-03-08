Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
                items: [{
                        xtype: 'datepickerfield',
                        id: "datefield-id",
                        name: 'date',
                        hidden: true,
                        label: 'Date',
                        //value: new Date(),
                        value: {year: 2013, month: 2, day: 26},
                        picker: {slotOrder: ['day', 'month', 'year']},
                        picker: {yearFrom: 2000, yearTo: 2013}
                        }]
                };
                
                if (Ext.os.is.Phone) {
                formBase.fullscreen = true;
                } else { //if desktop
                Ext.apply(formBase, {
                          modal: true,
                          centered: true,
                          hideOnMaskTap: false,
                          height: 385,
                          width: 480
                          });
                }
                //create form panel
                form = Ext.create('Ext.form.Panel', formBase);
                
                Ext.Viewport.add(form);
                
                var cmp = Ext.getCmp('datefield-id');
                cmp.show();
                
                }
                });
