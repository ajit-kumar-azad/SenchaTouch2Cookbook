Ext.application({
	name: 'MyApp',
	
	launch: function() {
	var pnl = Ext.create('Ext.Container', {
	    fullscreen: true,
	    items: [
	        {
	        	id: 'audio-pnl',
	            xtype: 'audio',
	            enableControls: false,
	            loop: true,
	            volume: 0.5,
	            url  : "ch07/here-it-is.mp3"
	        }, {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        text: 'Resume',
                        ui: 'confirm',
                        handler: function() {
                            var audioPnl = Ext.getCmp('audio-pnl');
							audioPnl.play();
                        }
                    },
                    {
                        text: 'Stop',
                        handler: function() {
                        	var audioPnl = Ext.getCmp('audio-pnl');
                        	audioPnl.pause();
                        }
                    }, {
                        xtype: 'sliderfield',
                        width: 200,
                        value: 5,
                        minValue: 0,
                        maxValue: 10,
                        listeners: {
                        		change: function(thisSl, sl, thumb, newVal, oldVal) {
                        			var audioPnl = Ext.getCmp('audio-pnl');
                                	audioPnl.setVolume(newVal/10);
                        		}
                        }
                    }
                ]
            }],
	    listeners: {
	    	painted: function() {
	    		var audioPnl = Ext.getCmp('audio-pnl');
	    		audioPnl.play();
	    	}
	    }
	});
	
    }
});