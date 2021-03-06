Ext.application({
	name : 'MyApp',
	
    launch: function() {
    	
	Ext.define('MyApp.model.Contact', {
		extend: 'Ext.data.Model',
		config: {
			fields: ['firstName', 'lastName']			
		}
	});

var store = Ext.create('Ext.data.Store', {
    model  : 'MyApp.model.Contact',
//    sorters: 'firstName',
//    sorters: [{property: 'firstName', direction: 'ASC'},
//    		  {property: 'lastName', direction: 'DESC'}],

    data: [
        {firstName: 'Ajit',   lastName: 'Kumar'},
        {firstName: 'Alok',   lastName: 'Ranjan'},
        {firstName: 'Pradeep',lastName: 'Lavania'},
        {firstName: 'Sunil',  lastName: 'Kumar'},
        {firstName: 'Sujit',  lastName: 'Kumar'},
        {firstName: 'Pratyush',lastName: 'Kumar'},
        {firstName: 'Piyush', lastName: 'Kumar'},
        {firstName: 'Priti', lastName: ''},
        {firstName: 'Seema',  lastName: 'Singh'},
        {firstName: 'Ayush',  lastName: 'Kumar'},
        {firstName: 'Ayush',  lastName: 'Ranjan'},
        {firstName: 'Alisha', lastName: 'Lavania'},
        {firstName: 'Deepak',   lastName: 'Sinha'},
        {firstName: 'Sheela',   lastName: 'Kejawani'},
        {firstName: 'Srikanth',    lastName: 'Reddy'},
        {firstName: 'Suman', lastName: 'Ravuri'},
        {firstName: 'Ranjit', lastName: ''},
        {firstName: 'Jay',     lastName: 'Sharma'}
    ]
});

var list = Ext.create('Ext.dataview.List', {
	fullscreen: true,
    itemTpl: '<div>{firstName} {lastName}</div>',
    store: store
});
    }
});