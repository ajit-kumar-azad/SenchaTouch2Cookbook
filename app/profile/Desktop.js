Ext.define('MyApp.profile.Desktop', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        return Ext.os.deviceType === 'Desktop';
    }
});
