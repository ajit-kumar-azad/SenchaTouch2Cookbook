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
 		}
	});
	
	var store = Ext.create ('Ext.data.Store', {
	    model: 'User',
	    data : [{
	    name : 'Ajit Kumar',
	    age  : 32,
	    phone: '555-555-5555',
	    email: 'ajit@walkingtree.in'
	}, {
	    name : 'Alok Ranjan',
	    age  : 32,
	    phone: '123-456-7890',
	    email: 'alok@walkingtree.in'
	}, {
	    name : 'Pradeep Lavania',
	    age  : 34,
	    phone: '987-654-3210',
	    email: 'pradeep@walkingtree.in'
	}
	    ]
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
    
//	store.add({
//	    name : 'Priti',
//	    age  : 30,
//	    phone: '987-654-3210',
//	    email: 'priti@walkingtree.in'
//	});
	
//	store.insert(1, {
//	    name : 'Priti',
//	    age  : 30,
//	    phone: '987-654-3210',
//	    email: 'priti@walkingtree.in'
//	});
//	
//	var user = Ext.create('User', {
//	    name : 'Pratyush Kumar',
//	    age  : 5,
//	    phone: '987-654-3210'
//	});
//	
//    store.add([user]);
	
    }
});