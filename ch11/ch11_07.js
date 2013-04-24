Ext.application({
	name : 'MyApp',

	launch : function() {

		//Back button
		document.addEventListener("deviceready", function() {
			var i = 0;
			document.addEventListener("backbutton", function() {
				alert('Back button pressed!');
			}, false);
		}, false);

	}
});