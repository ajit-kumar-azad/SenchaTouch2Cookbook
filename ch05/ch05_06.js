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
	    ],
	    validations: [
	        {type: 'presence', message: ' property not found', field: 'age'},
	        {type: 'length',    field: 'name',     min: 2},
	        //{type: 'inclusion', field: 'gender',   list: ['Male', 'Female']},
	        //{type: 'exclusion', field: 'username', list: ['Admin', 'Operator']},
	        //{type: 'format',    field: 'username', matcher: /([a-z]+)[0-9]{2,3}/},
	        {type: 'email',    field: 'email'}
	    ]
 		}
	});
	
	var user = Ext.create('User', {
	    name : '',
	    phone: '555-555-5555',
	    email: 'ajitkumar@walkingtree.in'
	});
	
	var errors = user.validate();
	if (!errors.isValid()) {
		var errStr = '';
		Ext.each(errors.items, function(error, index, allErrors){
			errStr += error.getField() + ' : ' + error.getMessage() + '\n';
		});
		alert(errStr);
	}
	}
});