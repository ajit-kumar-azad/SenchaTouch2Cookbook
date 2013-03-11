Ext.application({
    launch: function() {
var picker = Ext.create('Ext.picker.Picker', {
//	enter: 'top',
//	exit: 'top',
//	showAnimation: 'fadeIn',
//	hideAnimation: 'fadeOut',
//	useTitles: true,
//	cancelButton: false,
//	doneButton: "I'm Done!",
//	toolbar: {
//		items: [{
//			text: 'Reset'
//		}]
//	},
    slots: [{
			title: 'Choose flower',
	        name : 'flower',
	//        align: 'right',
	        data : [
	            {text: 'Rose', value: 'rose'},
	            {text: 'Hibiscus', value: 'hibiscus'},
	            {text: 'Daffodil', value: 'daffodil'},
	            {text: 'Daisy', value: 'daisy'}
	        ]
	    }, {
        		title: 'Choose color',
            name : 'color',
//            align: 'right',
            data : [
                {text: 'Red', value: 'red'},
                {text: 'Peach', value: 'peach'},
                {text: 'Yellow', value: 'yellow'},
                {text: 'White', value: 'white'}
            ]
        }],
            listeners: {
            	pick: function(picker, pickedObj, slot) {
            		Ext.Msg.alert('Info', 'Value picked is: ' + pickedObj.flower + ' : ' + pickedObj.color);
            	}
            }
});

Ext.Viewport.add(picker);
picker.show();
    }
});