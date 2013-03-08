Ext.application({
                name: 'MyApp',
                
                requires: ['Ext.MessageBox'],
                
                launch: function() {
                var form;
                
                //form and related fields config
                var formBase = {
				//enable vertical scrolling in case the form exceeds the page height
                scrollable: 'vertical',
                standardSubmit: false,
                submitOnAction: true,
				url: 'http://localhost/test.php',
                items: [{//add a fieldset
                        xtype: 'fieldset',
                        title: 'Personal Info',
                        instructions: 'Please enter the information above.',
                        //apply the common settings to all the child items of the fieldset
                        defaults: {
                        required: true,		//required field
                        labelAlign: 'left',
                        labelWidth: '40%'
                        },
                        items: [
                                {//add a text feild
                                xtype: 'textfield',
                                name : 'name',
                                label: 'Name',
                                clearIcon: true,//shows the clear icon in the field when user types
                                autoCapitalize : true
                                }, {//add a password field
                                xtype: 'passwordfield',
                                name : 'password',
                                label: 'Password',
                                clearIcon: false
                                }, {
                                xtype: 'passwordfield',
                                name : 'reenter',
                                label: 'Re-enter Password',
                                clearIcon: true
                                }, {//add an email field
                                xtype: 'emailfield',
                                name : 'email',
                                label: 'Email',
                                placeHolder: 'you@sencha.com',
                                clearIcon: true
                                }]
                        }, {
                        //items docked to the bottom of the form
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: [
                                {
                                text: 'Reset',
                                handler: function() {
                                form.reset();	//reset the fields
                                }
                                },
                                {
                                text: 'Save',
                                ui: 'confirm',
                                handler: function() {
                                var isValid = true;
                                var errors = new Array();
			                    
                                var fieldValMap = form.getValues();
                                var email = fieldValMap['email'];
                                var name = fieldValMap['name'];
                                
                                //validate the name
                                if (name.search(/[0-9]/) > -1) {
                                isValid = false;
                                errors.push({field : 'name',
                                            reason : 'Name must not contain numbers'});
                                }
                                
                                //validate e-mail
                                if (email.search("@") == -1) {
                                isValid = false;
                                errors.push({field : 'email',
                                            reason : 'E-mail address must contain @'});
                                }			                                     
                                
                                //show error if the validation failed		                    
                                if (!isValid) {
                                var errStr = "";
                                
                                Ext.each(errors, function(error, index){
                                         errStr += "[" + (index+1) + "] - " + error.reason + "\n";
                                         });
			                    
                                Ext.Msg.alert("Error", errStr);
                                } else {//form is valid
                                form.submit();
                                }
                                }

                                }
                                ]
                        }
                        ]
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
