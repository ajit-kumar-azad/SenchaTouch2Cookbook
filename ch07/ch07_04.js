Ext.application({
	name: 'MyApp',
	
	launch: function() {
		Ext.create('Ext.draw.Component', {
		  fullscreen: true,
		  items: [{
		    type: 'circle',
		    cx: 100,
		    cy: 100,
		    r: 25,
		    fillStyle: 'blue'
		  }, {
		    type: 'circle',
		    cx: 200,
		    cy: 100,
		    r: 25,
		    fillStyle: 'blue'
		  }, {
		    type: 'rect',
		    x: 140,
		    y: 150,
		    width: 25,
		    height: 80,
		    fillStyle: 'blue'
		  }, {
		    type: 'ellipticalArc',
		    cx: 150,
		    cy: 250,
		    rx: 40,
		    ry: 25,
		    fillStyle: 'blue',
		    startAngle: 0,
		    endAngle: Math.PI,
		    anticlockwise: false,
		  }]
		});
    
    }
});