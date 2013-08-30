Ext.require('Ext.device.Geolocation');

Ext.application({
	name : 'MyApp',

	launch: function() {
		Ext.device.Geolocation.getCurrentPosition({
		    success: function(position) {
		        alert('Latitude: ' + position.coords.latitude + ' Longitude: ' + position.coords.longitude);
		    },
		    failure: function() {
		        console.log('Could not get the location!');
		    }
		});
		
		Ext.device.Geolocation.watchPosition({
		    callback: function(position) {
		    	alert('New Latitude: ' + position.coords.latitude + ' Longitude: ' + position.coords.longitude);
		    },
		    failure: function() {
		        Ext.Msg.alert('Error', 'Could not get the location!');
		    }
		});
	}							
});