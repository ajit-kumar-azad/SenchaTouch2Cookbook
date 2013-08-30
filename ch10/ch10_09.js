Ext.application({
	name : 'MyApp',

	launch : function() {

		//Search button
		document.addEventListener("deviceready", function() {
			var i = 0;
			document.addEventListener("searchbutton", function() {
				alert('Search button pressed!');
			}, false);
		}, false);

	}
});