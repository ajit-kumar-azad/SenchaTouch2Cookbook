Ext.application({
	name: 'MyApp',
	
    launch: function() {    
	Ext.create('Ext.tab.Panel', {
    fullscreen: true,
//    ui        : 'light',
//    tabBarPosition: 'bottom',
    items: [
        {
            title: 'Album',
            styleHtmlContent: true,
            html: 'Contains the photos!',
            cls: 'tab1'
        },
        {
            title: 'Help',
            styleHtmlContent: true,
           	html: '<h1 style="font-size:16px;"><b>Help</b></h1><p>This application shows the album of flower pictures. You can filter the flowers based on their category, e.g. Rose, and view the additional detail about them.</p>',
            cls  : 'tab2'
        },
        {
            title: 'About',
            styleHtmlContent: true,
            html : '<h1 style="font-size:16px;"><b>About this app!</b></h1><p>Version 0.1</p>',
            cls  : 'tab3'
        }
    ]
});
    }
});