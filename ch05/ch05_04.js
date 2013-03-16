Ext.application({
	name : 'MyApp',
	
    launch: function() {

 	Ext.define('User', {
 		extend: 'Ext.data.Model',
 		config: {
		    fields: [
		    	'id',
		        {name: 'name',  type: 'string'},
		        {name: 'age',   type: 'int'},
		        {name: 'phone', type: 'string'},
		        {name: 'email', type: 'string'},
		        {name: 'alive', type: 'boolean', defaultValue: true}
		    ]
    	}
	});
	
	var store = Ext.create('Ext.data.Store', {
	    model: 'User',
	    autoLoad: true,
	    proxy: {
        type: 'ajax',
        url : 'users.json',
        reader: {
            type: 'json',
            rootProperty: 'users'
//	            ,record: 'user'
//	            ,totalProperty: 'totalRecords'
//	            ,successProperty: 'success'
        		}
	    }
	});
	
	
    var form;

    var formBase = {
        scrollable: 'vertical',
        items: [{
                    xtype: 'selectfield',
                    name : 'user',
                    label: 'User',
                    store: store,
                    valueField: 'name',
                    displayField: 'name'
                }]
    };
    
    if (Ext.os.is.Phone) {
        formBase.fullscreen = true;
    } else {
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