Ext.application({
	name: 'MyApp',
	
	launch: function() {
	 var store = Ext.create('Ext.data.Store', {
	        fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
	        data: [
	            {'name':'House Rent', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},
	            {'name':'Books', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},
	            {'name':'Petrol', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},
	            {'name':'Grocery', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},
	            {'name':'Loans & Deposits', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}                                                
	        ]
	    });
	    
	    var chart = Ext.create('Ext.chart.SpaceFillingChart', {
	        fullscreen: true,
	        store: store, 
		    series: [{
		        type: 'gauge',
		        //maximum: 20,
		        field: 'data3',
		        colors: ['crimson', 'gold','green', 'cyan'],
//		        needle: true,
//		        donut: 50,
		        subStyle: {
		        		stroke: ['red', 'none'],
		        		miterLimit: 10,
		        		lineCap: 'miter',
		        		lineWidth: 2
		        }
            }]
	});
    
    }
});