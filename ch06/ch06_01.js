Ext.application({
	name : 'MyApp',
	
    launch: function() {
    
		var buttons = [
		    {
		        //text: 'Normal',
		        //icon: 'ch06/delete.png',
		        //iconCls: 'cancel-icon',
		        //iconAlign: 'right',
                //iconCls: 'delete',
                //iconMask: true,
                html: '<span class="first-line">Normal</span><p></p><span class="second-line">This is a normal button with Html</span>',
		        handler: function() {
		        	Ext.Msg.alert('Info', 'You have clicked: ' + this.getText());
		        }
		    },
		    {
		        ui  : 'round',
		        text: 'Round',
		        badgeText: 'New'
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