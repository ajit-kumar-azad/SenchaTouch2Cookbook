Ext.application({
	name: 'MyApp',
	
	launch: function() {
	var pnl = Ext.create('Ext.Container', {
    fullscreen: true,
    items: [
        {
            xtype    : 'video',
            id       : 'video-pnl',
            //enableControls: false,
            //width    : 300,
            //height   : 250,
            url      : "ch07/space.mp4",
            posterUrl: "ch07/Screenshot.png"
        }, {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [
                {
                    text: 'Resume',
                    ui: 'confirm',
                    handler: function() {
                        var videoPnl = Ext.getCmp('video-pnl');
						videoPnl.play();
                    }
                },
                {
                    text: 'Stop',
                    handler: function() {
                    	var videoPnl = Ext.getCmp('video-pnl');
						videoPnl.pause();
                    }
                }
            ]
        }]
	});

    }
});