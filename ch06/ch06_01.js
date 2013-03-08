Ext.application({
	name : 'MyApp',
	
    launch: function() {
    
		var buttons = [
		    {
		        text: 'Normal',
		        //icon: 'ch06/cancel.png',
		        iconCls: 'cancel-icon',
		        iconAlign: 'right',
		        handler: function() {
		        	Ext.Msg.alert('Info', 'You have clicked: ' + this.text);
		        }
		    },
		    {
		        ui  : 'round',
		        text: 'Round',
		        badgeText: 'New',
		        badgeCls: 'x-badge'
		    },
		    {
		        ui  : 'small',
		        text: 'Small'
		    }
		];
		
		Ext.create('Ext.Panel', {
			fullscreen: true,
		    layout: {
		        type : 'hbox',
		        pack : 'center',
		        align: 'middle'
		    },
		    defaults: {
		    		xtype: 'button'
		    },
		    items: buttons
		});
    }
});