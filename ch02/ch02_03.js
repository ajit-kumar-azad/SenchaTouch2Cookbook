Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
                items: [{
                         xtype: 'emailfield',
                         name : 'email',
                         label: 'Email',
                         placeHolder: 'you@sencha.com',
                         clearIcon: true,
                         listeners: {
                         blur: function(thisTxt, eventObj) {
                         var val = thisTxt.getValue();
                         
                         //validate using the pattern
                         if (val.search("[a-c]+@[a-z]+[.][a-z]+") == -1)
                            Ext.Msg.alert("Error", "Invalid e-mail address!!");
                         else
                            Ext.Msg.alert("Info", "Valid e-mail address!!");
                         
                         }
                         }
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
