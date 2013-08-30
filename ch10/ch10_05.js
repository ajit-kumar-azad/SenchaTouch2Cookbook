Ext.application({
    name: 'MyApp',
    requires: 'Ext.device.Contacts',

    launch: function() {
    	
    	var me = this;
    	
    	Ext.Viewport.add(Ext.create('Ext.Container', {
    		html: '<input type="file" id="files" name="files[]" multiple />' +
    			  '<output id="list"></output>',
    		listeners: {
    			painted: function() {
    				Ext.get('files').dom.addEventListener('change', me.handleFileSelect, false);
    			}
    		}
    	}));
    	
		
    },
    handleFileSelect: function(evt) {
        var files = evt.target.files; // FileList object
        
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
            
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }
            
            var reader = new FileReader();
            
            // capture the file information.
            reader.onload = (function(theFile) {
                             return function(e) {
                             // Render thumbnail
                             var span = document.createElement('span');
                             span.innerHTML = ['<img class="thumb" src="', e.target.result,
                                               '" title="', escape(theFile.name), '"/>'].join('');
                             Ext.get('list').dom.insertBefore(span);
                             };
                             })(f);
            
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }

});