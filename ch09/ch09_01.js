Ext.application({
	name : 'MyApp',

	launch: function() {
    
        
	var geo = Ext.create('Ext.util.GeoLocation', {
	    autoUpdate: false,
	    listeners: {
	        locationupdate: function (geo) {
	            alert('New latitude: ' + geo.getLatitude() + ' : longitude : ' + geo.getLongitude() + ' @ ' + geo.getTimestamp());
	            //alert('Heading:' + geo.getHeading() + ': Speed:' + geo.getSpeed());
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
	
	geo.updateLocation();

	}							
});