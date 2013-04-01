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
	    
	    var chart = Ext.create('Ext.chart.PolarChart', {
		    store: store,
		    axes: [{
		        type: 'numeric',
		        position: 'radial',
		        fields: 'data1',
		        style: {
                   estStepSize: 10
		        },
		        grid: true
		    }, {
		        type: 'category',
		        position: 'angular',
		        fields: 'name',
		        grid: true
		      }],
	        legend: {
		      docked: 'bottom'
		    },
		    series: [{
		        type: 'radar',
		        title: 'Series 1',
		        xField: 'name',
		        yField: 'data1',
		        marker: {
		        	type: 'ellipse',
                    rx: 10,
		            ry: 5,
		            fillStyle: 'red'
		        },
		        style: {
		            'stroke-width': 2,
		            fill: 'red',
		            opacity: 0.4
		        }
		    },{
		        type: 'radar',
		        title: 'Series 2',
		        xField: 'name',
		        yField: 'data2',
		        marker: {
		        	type: 'rect',
		            width:10,
		            height:10,
		            fillStyle: 'purple'
		        },
		        style: {
		            'stroke-width': 2,
		            fill: 'purple',
		            opacity: 0.4
		        }
		    },{
		        type: 'radar',
		        title: 'Series 3',
		        xField: 'name',
		        yField: 'data4',
		        marker: {
		        	type: 'circle',
		            r:5,
		            stroke: 'crimson'
		        },
		        style: {
		            'stroke-width': 4,
		            fill: 'crimson',
		            opacity: 0.4
		        }
		    }]    
	});
	    Ext.Viewport.setLayout('fit');
		Ext.Viewport.add(chart);
    
    }
});