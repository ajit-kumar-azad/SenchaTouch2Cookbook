Ext.application({
	name : 'MyApp',
	
    launch: function() {

 	Ext.define('User', {
 		extend: 'Ext.data.Model',
 		config: {
	    fields: [
	        {name: 'id',  type: 'int'},
	        {name: 'name',  type: 'string'},
	        {name: 'age',   type: 'int'},
	        {name: 'phone', type: 'string'},
	        {name: 'email', type: 'string'},
	        {name: 'alive', type: 'boolean', defaultValue: true}
	        
	    ],
	    hasMany: {model: 'Address', name: 'addresses'},
	    proxy: {
	        type: 'sql',
	        database: 'Cookbook',
	        model : 'User'
    	}
 		}
	});
	
	Ext.define('Address', {
		extend: 'Ext.data.Model',
		config: {
	    fields: ['id', 'line1', 'line2', 'zipcode', 'state', 'country', 'user_id'],
	
	    belongsTo: 'User',
	    proxy: {
	        type: 'sql',
	        database: 'Cookbook',
	        model : 'Address'
    	}
		}
	});
	
	
	var user = Ext.create('User', {
    name : 'Ajit Kumar',
    age  : 24,
    phone: '555-555-5555',
    email: 'ajitkumar@walkingtree.in'
	});
	
	user.save({
    success: function(record) {
        console.log('The User was saved');
        
        var userId = record.get('id');
        
        var addr = Ext.create('Address', {
        		user_id: userId,
	        	line1: 'Flat# 101, Plot# 101, Elegance Apartment',
	        	line2: 'New SBH Colony, East Maredpally, Hyderabad',
	        	zipcode: '500023',
	        	state: 'AP',
	        	country: 'India'
        });
        
        addr.save({
        		success: function() {
        			console.log('The Address was saved');
        		    
        			User = Ext.ModelMgr.getModel('User');
        		    
        		    User.load(userId, {
        		    success: function(record, operation) {
        		        console.log('The User was loaded');
        		        alert('Name: ' + record.get('name') + ' : Addresses : ' + record.addresses().getCount());
        		    }});
        		}
        });
    }});
	}
	
});