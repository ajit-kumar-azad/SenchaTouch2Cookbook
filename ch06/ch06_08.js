Ext.application({
    launch: function() {
var picker = Ext.create('Ext.Picker', {
	enter: 'top',
	enterAnimation: 'fade',
	exit: 'top',
	exitAnimation: 'flip',
//	useTitles: true,
//	cancelButton: false,
//	doneButton: "I'm Done!",
//	toolbar: {
//		items: [{
//			text: 'Reset'
//		}]
//	},
    slots: [
        {
//        		title: 'Choose color',
            name : 'color',
//            align: 'right',
            data : [
                {text: 'Red', value: 'red'},
                {text: 'Peach', value: 'peach'},
                {text: 'Yellow', value: 'yellow'},
                {text: 'White', value: 'white'}
            ]
        }
    ],
            listeners: {
            	pick: function(picker, pickedObj, slot) {
            		Ext.Msg.alert('Info', 'Value picked is: ' + pickedObj.color);
            	}
            }
});

Ext.Viewport.add(picker);
picker.show();
    }
});