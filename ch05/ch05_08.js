Ext.application({
	name : 'MyApp',
	
    launch: function() {

    	Ext.define('Marital', {
    	    extend: 'Ext.data.Model',
    	    config: {
    	    fields: [
    	            'id',
    	            'status'
    	        ]
    	    }
    	});
    	
 	Ext.define('User', {
 		extend: 'Ext.data.Model',
 		config: {
	    fields: [
	        {name: 'name',  type: 'string'},
	        {name: 'age',   type: 'int'},
	        {name: 'phone', type: 'string'},
	        {name: 'email', type: 'string'},
	        {name: 'alive', type: 'boolean', defaultValue: true}
	        
	    ],
	    hasMany: {model: 'Address', name: 'addresses'},
	    hasOne: [
	             {
	             model: 'Marital',
	             associationKey: 'marital'
	             }
	         ]
 		}
	});
	
	Ext.define('Address', {
		extend: 'Ext.data.Model',
		config: {
	    fields: ['id', 'line1', 'line2', 'zipcode', 'state', 'country']
		}
	    //,belongsTo: 'User'
	});
	
	var user = Ext.create('User', {
    name : 'Ajit Kumar',
    age  : 24,
    phone: '555-555-5555',
    email: 'ajit.kumar@walkingtree.in',
    addresses: [{
    	id: 1,
    	line1: 'Flat# 101, Plot# 101, Elegance Apartment',
    	line2: 'New SBH Colony, East Maredpally, Hyderabad',
    	zipcode: '500023',
    	state: 'AP',
    	country: 'India'
    }, {
    	id: 2,
    	line1: 'Janapriya Utopia',
    	line2: 'Hyderguda, Hyderabad',
    	zipcode: '500081',
    	state: 'AP',
    	country: 'India'
    }],
    marital: {
    		id: 1,
    		status: 'Married'
    }
	});
	
	alert('Number of addresses: ' + user.addresses().getCount() + ' and is ' + user.getMarital().get("status"));
	}
	
});