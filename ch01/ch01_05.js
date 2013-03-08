Ext.application({
    name: 'MyApp',
    
    launch: function() {
	

        Ext.Viewport.onBefore('orientationchange', function(vp, newOrientation, width, height, eOpts) {
                alert('before orientationchange...cancelling');
                return false;
        });

	    Ext.Viewport.on('orientationchange', function(vp, newOrientation, width, height, eOpts) {
			Ext.Msg.alert("INFO","Orientation: " + newOrientation + " : width:" + width + ":height:" + height);
		});

		Ext.Viewport.add(Ext.create('Ext.Panel', {
	            items : [
	                {
	                    html: 'Welcome to My App!'
	                    
	                }
	            ]}
		));
    }
    
});
