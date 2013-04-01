Ext.application({
	name: 'MyApp',
	
	launch: function() {
	var ct = Ext.create('Ext.Container', {
	    fullscreen: true,
	    style: 'background-color:gold;',
	    height: 100,
	    width: 100
	});
	
	Ext.Anim.run(ct.element, 'cube', {
	    out: false,
	    autoClear: false,
	    direction: 'up',
	    duration: 2000,
	    reverse: true,
	    delay: 2000,
	    after: function() {
	    		alert('Animation is over!');
	    }
	});
    }
});
