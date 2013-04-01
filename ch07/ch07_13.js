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
	    
	    var chart = Ext.create('Ext.chart.CartesianChart', {
		    store: store,
		    axes: [{
		        type: 'numeric',
		        position: 'left',
		        fields: ['data1', 'data2', 'data3'],
		        title: 'Sample Values',
		        grid: true,
		        minimum: 0
		    }, {
		        type: 'category',
		        position: 'bottom',
		        fields: ['name'],
		        title: 'Sample Metrics'
		    }],
	        legend: {
	        		docked: 'bottom'
		    },
		    series: [{
		        type: 'scatter',
		        xField: 'name',
		        yField: 'data1',
		        fill: true,
		        marker: {
		            type: 'circle',
		            fillStyle: 'blue',
		            radius: 10,
		            lineWidth: 0
		        }
		    },{
		        type: 'scatter',
		        marker: {
		        	type: 'rect',
		        	width: 10,
		        	height: 10,
		            fillStyle: 'crimson'
		        },
		        axis: 'left',
		        xField: 'name',
		        yField: 'data2'
		    }, {
		        type: 'scatter',
		        marker: {
		        	type: 'circle',
		        	radius: 10,
		            fillStyle: 'green'
		        },
		        axis: 'left',
		        xField: 'name',
		        yField: 'data3'
		    }],
	        interactions: [{
                    type: 'panzoom',
                    zoomOnPanGesture: true
                },
                {
                    type: 'iteminfo',
                    gesture: 'itemtaphold'
                }]   
	});
	    Ext.Viewport.setLayout('fit');
		Ext.Viewport.add(chart);
    
    }
});