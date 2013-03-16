Ext.application({
	name : 'MyApp',
	
    launch: function() {

 	Ext.define('User', {
 		extend: 'Ext.data.Model',
 		config: {
		    fields: [
		        {name: 'name',  type: 'string'},
		        {name: 'age',   type: 'int'},
		        {name: 'phone', type: 'string'},
		        {name: 'email', type: 'string'},
		        {name: 'alive', type: 'boolean', defaultValue: true}
		    ]
 		},
	
	    changeName: function() {
	        var oldName = this.get('name'),
	            newName = oldName + " Azad";
	
	        this.set('name', newName);
	    }
	});
	
	var user = Ext.create('User', {
	    name : 'Ajit Kumar',
	    age  : 24,
	    phone: '555-555-5555',
	    email: 'ajitkumar@walkingtree.in'
	});
	
	user.changeName();    
 
    var form;

    var formBase = {
        scrollable: 'vertical',
        items: [{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
            	{
                    text: 'Load',
                    handler: function() {
                        form.setRecord(user);
                    }
                },
                {
                    text: 'Reset',
                    ui: 'decline',
                    handler: function() {
                        form.reset();
                    }
                },
                {
                    text: 'Save',
                    ui: 'confirm',
                    handler: function() {
                    	Ext.Msg.alert("INFO", "In real implementation, this will be saved!");
//                    	var formValues = form.getValues();
//                    	user.set(formValues); //updates the values and marks the instance dirty
//                    	user.save();	//saves the data. this requires a proxy setup on the model
                    }
                }
            ]
        }, {
                xtype: 'fieldset',
                title: 'Personal Info',
                instructions: 'Please enter the information above.',
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                {
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Name',
                    useClearIcon: true,
                    autoCapitalize : false
                }, {
                    xtype: 'numberfield',
                    name : 'age',
                    label: 'Age',
                    useClearIcon: false
                }, {
                    xtype: 'textfield',
                    name : 'phone',
                    label: 'Phone',
                    useClearIcon: true
                }, {
                    xtype: 'emailfield',
                    name : 'email',
                    label: 'Email',
                    placeHolder: 'you@sencha.com',
                    useClearIcon: true
                }, {
                    xtype: 'checkboxfield',
                    name : 'alive',
                    label: 'Is Alive',
                    useClearIcon: true
                }]
            }
        ],
        listeners : {
            submit : function(form, result){
                console.log('success', Ext.toArray(arguments));
            },
            exception : function(form, result){
                console.log('failure', Ext.toArray(arguments));
            }
        }
    };
    
    if (Ext.os.is.Phone) {
    		//phone specific configuration
        formBase.fullscreen = true;
    } else {
    		//desktop specific configuration
        Ext.apply(formBase, {
            autoRender: true,
            floating: true,
            modal: true,
            centered: true,
            hideOnMaskTap: false,
            height: 385,
            width: 480
        });
    }
    
    form = Ext.create('Ext.form.FormPanel', formBase);
    Ext.Viewport.add(form);
    
    }
});