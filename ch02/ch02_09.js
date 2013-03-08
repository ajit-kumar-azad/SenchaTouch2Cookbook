Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
                items: [{
    xtype: 'checkboxfield',
                        name: 'city',
                        value: 'Hyderabad',
                        label: 'Hyderabad',
                        checked: true
                        }, {
                        xtype: 'checkboxfield',
                        name: 'city',
                        value: 'Mumbai',
                        label: 'Mumbai'
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
