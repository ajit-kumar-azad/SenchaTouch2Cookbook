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
	        type: 'localstorage',
	        id : '9185ch05localkey'
    	}
 		}
	});
	
	Ext.define('Address', {
		extend: 'Ext.data.Model',
		config: {
	    fields: ['id', 'line1', 'line2', 'zipcode', 'state', 'country', 'user_id'],
	
	    belongsTo: 'User'
		}
	});
	
	
	var user = Ext.create('User', {
	id: 1,
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
    }]
	});
	
	user.save({
    success: function() {
        console.log('The User was saved');
    }});
    
    User = Ext.ModelMgr.getModel('User');
    User.load(1, {
    success: function(record, operation) {
        console.log('The User was loaded');
        alert('Name: ' + record.get('name') + ' : Addresses : ' + record.addresses().getCount());
    }});
	}
	
});