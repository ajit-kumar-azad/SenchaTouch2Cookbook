Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
                items: [{
                         xtype: 'selectfield',
                         name: 'select',
                         label: 'Select',
                         placeHolder: 'Select...',
                        displayField: 'desc',
                        options: [
                                   {desc: 'First Option',  value: 'first'},
                                   {desc: 'Second Option', value: 'second'},
                                   {desc: 'Third Option',  value: 'third'}
                                  ]
/*
                         options: [
                                   {text: 'First Option',  value: 'first'},
                                   {text: 'Second Option', value: 'second'},
                                   {text: 'Third Option',  value: 'third'}
                                   ]*/
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
                
                }
                });
