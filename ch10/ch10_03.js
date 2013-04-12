Ext.application({
	name : 'MyApp',

	launch: function() {
    
 
	 Ext.Viewport.add({
		 xtype: 'map',
	useCurrentLocation: true,
		 mapOptions: {
//	     	center: new google.maps.LatLng(17.22, 78.28, true),
	     	mapTypeId: google.maps.MapTypeId.TERRAIN,
	     	zoom: 10
	     }
	 });

	}							
});