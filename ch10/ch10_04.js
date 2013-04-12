Ext.application({
	name : 'MyApp',

	launch: function() {
    
    var geo = Ext.create('Ext.util.GeoLocation', {
	    autoUpdate: true,
	    listeners: {
	        locationupdate: function (geo) {
	            var map = Ext.getCmp('google-map-id');
	            map.setGeo(geo);
	        },
	        locationerror: function (   geo,
	                                    bTimeout, 
	                                    bPermissionDenied, 
	                                    bLocationUnavailable, 
	                                    message) {
	            if(bTimeout){
	                alert('Timeout occurred.');
	            }
	            if (bPermissionDenied){
	                alert('Permission denied.');
	            }
	            if (bLocationUnavailable) {
	            	alert('Location unavailable.');
	            }
	        }
	    }
	});
	
    Ext.Viewport.add({
            xtype: 'map',
            id: 'google-map-id',
            geo: geo,
            mapOptions: {
	            	mapTypeId: google.maps.MapTypeId.TERRAIN,
	            	zoom: 10
            }
      });

	}							
});