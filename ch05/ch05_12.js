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
	
	var store = Ext.create('Ext.data.Store', {
	    model: 'User',
//	    autoLoad: true,
	    remoteGroup: true,
	    remoteSort: true,
//	    remoteFilter: true,
	    groupField: 'age',
		groupDir: 'DESC',
	    //pageSize: 30,
	    proxy: {
        type: 'ajax',
        url: 'users.json',
        sortParam: 'sortCriteria',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    	}
	});
	
	store.sort([
        {
            property : 'age',
            direction: 'DESC'
        },
        {
            property : 'name',
            direction: 'ASC'
        }
    	]);
	
    store.filter([
        {
            property: 'name',
            value   : /Aj/
        }
    	]);
	
    store.load();
	
    var form;

    var formBase = {
        scroll: 'vertical',
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