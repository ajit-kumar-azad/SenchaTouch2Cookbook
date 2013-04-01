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
		        fields: ['data1', 'data2'],
		        title: {
		            text: 'Sample Values',
		            fontSize: 15
		        },
		        grid: true,
		        minimum: 0
		    }, {
		        type: 'category',
		        position: 'bottom',
		        fields: ['name'],
		        title: {
		            text: 'Categories',
		            fontSize: 15
		        }
		    }],
		    series: [{
		        type: 'line',
		        style: {
		            stroke: 'blue',
		            globalAlpha: 0.4
		        },
		        fill: true,
		        smooth: true,
		        xField: 'name',
		        yField: 'data1',
		        marker: {
		            type: 'path',
		            path: ['M', -2, 0, 0, 2, 2, 0, 0, -2, 'Z'],
		            stroke: 'blue',
		            lineWidth: 0
		        }
		    }, {
		        type: 'line',
		        highlightCfg: {
		            size: 7,
		            radius: 7
		        },
		        style: {
		            stroke: 'crimson',
		            globalAlpha: 0.4
		        },
		        fill: true,
		        smooth: true,
		        xField: 'name',
		        yField: 'data2',
		        marker: {
		            type: 'circle',
		            radius: 4,
		            lineWidth: 0
		        }
		    }],
		    interactions: ['crosszoom', 'itemhighlight']
		});
		Ext.Viewport.setLayout('fit');
		Ext.Viewport.add(chart);
    
    }
});