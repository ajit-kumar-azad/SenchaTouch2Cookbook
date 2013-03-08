Ext.application({
    name: 'MyApp',
	 profiles: ['Android', 'Desktop', 'TabletPortrait'],
    launch: function() {
        	Ext.Viewport.add(Ext.create('Ext.Panel', {
            items : [
                {
                    html: 'Welcome to My App!' + ' - profile - ' + this.getCurrentProfile().getName()
                    
                }
            ]
        }));
    }
    
});
