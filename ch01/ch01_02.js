Ext.application({
    name: 'MyApp',

    launch: function() {

	if (Ext.os.is.Android)
        	Ext.Msg.alert("INFO", "Welcome Android user!");
        
        if (Ext.os.is.Blackberry)
        	Ext.Msg.alert("INFO", "Welcome Blackberry user!");
        	
        if (Ext.os.is.iPad)
        	Ext.Msg.alert("INFO", "Welcome iPad user!");

	if (Ext.os.is.Windows) {
		var str = "Welcome Windows user!";
		if (Ext.os.deviceType === "Desktop")
			str += "Looks like you are running this sample on Desktop";

		Ext.Msg.alert("INFO", str);
    	}
    }
});
