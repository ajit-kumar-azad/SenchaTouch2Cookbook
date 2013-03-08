Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
                items: [{
    xtype: 'sliderfield',
                        name : 'height',
                        label: 'Height',
                        minValue: 0,
                        maxValue: 100,
                        increment: 10
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
