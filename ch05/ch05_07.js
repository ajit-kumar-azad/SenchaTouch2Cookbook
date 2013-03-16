Ext.application({
	name : 'MyApp',
	
    launch: function() {
    
	Ext.apply(Ext.data.validations, {

		checkdate: function(config, value) {
			if (value === undefined) {
				return false;
			}

			var graceDays = Ext.isEmpty(config.grace) ? 1 : config.grace;
			
			var date = Ext.Date.parse(value, 'd-m-Y');
			var currDate = new Date(); 
			currDate = Ext.Date.clearTime(currDate);
			if (Ext.Date.between(date, currDate, Ext.Date.add(currDate, Ext.Date.DAY, graceDays)))
				return true;
			else
				return false;

		},
		getCheckdateMessage: function() {
			return 'date is not within the allowed range';
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
	        {name: 'effectiveDate', type: 'string'},	//format d-m-Y
	        {name: 'alive', type: 'boolean', defaultValue: true}
	    ],
	    validations: [
	        {type: 'presence', field: 'age'},
	        {type: 'length',    field: 'name',     min: 2},
	        {type: 'checkdate', field: 'effectiveDate', grace: 2}
	    ]
 		}
	});
	
	var user = Ext.create('User', {
	    name : '',
	    phone: '555-555-5555',
	    email: 'ajit.kumar@walkingtree.in',
	    effectiveDate: '18-03-2013'
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