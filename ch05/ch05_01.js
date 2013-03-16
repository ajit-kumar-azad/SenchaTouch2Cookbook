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
	
	Ext.define('MyUser', {
		extend: 'User',
		config: {
		    fields: [
		        {name: 'dob',  type: 'string'}
		    ]
		}
	});
	
	var user = Ext.create('User', {
	    name : 'Ajit Kumar',
	    age  : 24,
	    phone: '555-555-5555',
	    email: 'ajitkumar@walkingtree.in'
	});
	
	user.changeName();
	Ext.Msg.alert('INFO',user.get('name'));//shows Ajit Kumar Azad   

	var myuser = Ext.create('MyUser', {
	    name : 'Ajit Kumar',
	    age  : 24,
	    phone: '555-555-5555',
	    email: 'ajitkumar@walkingtree.in',
	    dob: '04-04-1978'
	});
	
	Ext.Msg.alert('INFO', myuser.get('name') + ' : dob : ' + myuser.get('dob'));

	}							
});