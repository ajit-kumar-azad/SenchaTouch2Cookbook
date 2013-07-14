Ext.application({
	name : 'MyApp',
	requires : 'Ext.device.Notification',

	launch : function() {
		
		Ext.device.Notification.show({
			title : 'Verification',
			message : 'Are you a human?',
			buttons : [Ext.MessageBox.YES, Ext.MessageBox.CANCEL],
			callback : function(button) {
				if (button === "yes") {
					alert('Verified');
				} else {
					alert('Nope');
				}
			}
		});
		
		Ext.device.Notification.vibrate();
		
//		document.addEventListener("deviceready", function() {
//			navigator.notification.confirm(
//					'Are you a human?',
//		            function(btnIdx) {
//						alert(btnIdx);
//					},
//		            'Verification',
//		            "Yes,Cancel"
//		        );
//		}, false);
	}
});