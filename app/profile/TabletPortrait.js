Ext.define('MyApp.profile.TabletPortrait', {
    extend: 'Ext.app.Profile',

    isActive: function() {
        return Ext.os.deviceType === 'Tablet' && Ext.viewport.Default.getOrientation() === 'portrait';
    }
});
