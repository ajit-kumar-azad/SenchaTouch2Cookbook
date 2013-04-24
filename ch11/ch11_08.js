Ext.application({
	name : 'MyApp',

	launch : function() {

		//Menu button
		document.addEventListener("deviceready", function() {
			var i = 0;
			document.addEventListener("menubutton", function() {
				alert('Menu button pressed!');
			}, false);
		}, false);

	}
});