Ext.application({
    name: 'MyApp',

    launch: function() {

	    var featuresStr = "";
	    for (var key in Ext.feature.has) {
		    if (Ext.feature.has.hasOwnProperty(key))
				featuresStr += key + " - " + Ext.feature.has[key] + "\n";
	    }

	    var browserStr = "";
	    for (var key in Ext.browser.is) {
		    if (Ext.browser.is.hasOwnProperty(key))
				browserStr += key + " - " + Ext.browser.is[key] + "\n";
	    }

	    alert(featuresStr);
	    alert(browserStr);
    }
});
