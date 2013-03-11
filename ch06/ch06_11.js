Ext.application({
    launch: function() {
	var myToolbar = Ext.create('Ext.Toolbar', {
//	    docked : 'left',
//	    title: 'My Toolbar',
	    items: [
                {
                	xtype: 'searchfield'
                },
                {
                    text: 'Rose'
                },
                {
                    text: 'Daffodil'
                },{
                    text: 'Hibiscus'
                },{
                    text: 'Reset',
                    ui: 'decline-round'
                }, {
                    text: 'Back',
                    ui: 'back'
                }
            ]
	});
	
	var myPanel = Ext.create('Ext.Panel', {
	    items: [myToolbar],
	    styleHtmlContent: true,
	    fullscreen : true,
	    html       : 'Test Panel'
	});

    }
 });