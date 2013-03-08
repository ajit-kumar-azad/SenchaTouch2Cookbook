Ext.application({
	name: 'MyApp',
	
    launch: function() {
	var segmentedButton = Ext.create('Ext.SegmentedButton', {
//	    allowMultiple: true,
	    items: [
	        {
	            text: 'Album'
	        },
	        {
	            text   : 'About',
	            pressed: true
	        },
	        {
	            text: 'Help'
	        }
	    ],
	    listeners: {
	        toggle: function(container, button, pressed){
	            console.log("User toggled the '" + button.getText() + "' button: " + (pressed ? 'on' : 'off'));
	        }
	    }
	});
	
	Ext.Viewport.add({
		xtype: 'container',
		padding: 10,
		items: [segmentedButton]
	});
	
    }
});