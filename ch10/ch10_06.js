Ext.application({
	name : 'MyApp',

	launch : function() {

		//Home button
		document.addEventListener("deviceready", function() {
			var counter = 0;
			document.addEventListener("pause", function() {
				counter++;
			}, false);

			document.addEventListener("resume", function() {
				alert('Value is: ' + counter);
			}, false);

		}, false);

	}
});