Ext.application({
	name : 'MyApp',

	launch : function() {

		//Home button
		document.addEventListener("deviceready", function() {
			var i = 0;
			document.addEventListener("pause", function() {
				i++;
			}, false);

			document.addEventListener("resume", function() {
				alert('Value is: ' + i);
			}, false);

		}, false);

	}
});