Ext.define('MyApp.profile.Android', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        return Ext.os.is.Android;
    }
});
