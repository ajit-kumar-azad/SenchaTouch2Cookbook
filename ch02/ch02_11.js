Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
                items: [{
    xtype: 'fieldset',
                        instructions: 'Fill in your personal detail',
                        title: 'About Me',
                        items: [
                                {
                                xtype: 'textfield',
                                name : 'firstName',
                                label: 'First Name'
                                },
                                {
                                xtype: 'textfield',
                                name : 'lastName',
                                label: 'Last Name'
                                }
                                ]
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
