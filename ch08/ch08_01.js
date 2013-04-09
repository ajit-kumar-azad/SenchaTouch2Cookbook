Ext.application({
	name : 'MyApp',

	launch : function() {

		function onDeviceReady() {
			checkConnection();
		}

		function checkConnection() {
			var networkState = navigator.connection.type;

			var states = {};
			states[Connection.UNKNOWN] = 'Unknown connection';
			states[Connection.ETHERNET] = 'Ethernet connection';
			states[Connection.WIFI] = 'WiFi connection';
			states[Connection.CELL_2G] = 'Cell 2G connection';
			states[Connection.CELL_3G] = 'Cell 3G connection';
			states[Connection.CELL_4G] = 'Cell 4G connection';
			states[Connection.NONE] = 'No network connection';

			var str = (navigator.onLine ? 'ONLINE' : 'OFFLINE') + ' - '
					+ states[networkState];

			Ext.Msg.alert('INFO', str);
		}

		document.addEventListener("deviceready", onDeviceReady, false);

	}
});