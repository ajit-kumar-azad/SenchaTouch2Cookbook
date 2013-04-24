Ext.application({
    name: 'MyApp',
    requires: 'Ext.device.Contacts',

    launch: function() {
    	
    	document.addEventListener("deviceready", this.onDeviceReady, false);
    	
//    	Ext.device.Contacts.getContacts({
//    		success: function(contacts) {
//    			Ext.Viewport.add({
//    	            xtype: 'list',
//    	            itemTpl: '{first} {last}',
//    	            store: {
//    	                fields: ['first', 'last'],
//    	                data: contacts
//    	            }
//    	        });
//    			
//    			//get thumbnail
//    			
//    			//print complete JSON object 
//    		},
//    		failure: function(msg) {
//    			Ext.Msg.alert('Error', 'Failed to read contacts: ' + msg);
//    		}
//    });
        
    },
    onDeviceReady : function() {
    		var options = new ContactFindOptions();
        options.filter="";
        options.multiple = true;
        
        var fields = ["displayName"];
        
        navigator.contacts.find(fields, function(contacts) {
        	
//        	alert('Contacts length: ' + contacts.length);
        	
        	var data = [];
    		for (var i=0; i<contacts.length; i++) {
    			data.push({name: contacts[i].displayName});
         }
    		
//    		alert('Data length: ' + data.length);
    		
		Ext.Viewport.add({
        xtype: 'list',
        itemTpl: '{name}',
        store: {
            fields: ['name'],
            data: data
        }
        });
    		
        }, function(msg) {
    			alert('onError: ' + msg);
        }, options);
    }
});
