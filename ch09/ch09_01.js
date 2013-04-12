Ext.application({
	name : 'MyApp',

	launch: function() {
    
    this.handleEvent = function(e, t, opts, ec) {
	    	if (!Ext.isEmpty(ec.info)) {
	    		var en = ec.info.eventName;
	    		console.log(en);
	    		
	    		if (en == 'touchstart') {
	    			if (e.touches[0] == e.targetTouches[0]) {
	    				console.log('Container covers the complete touchable area!');
	    			}
	    			
	    			if (e.touches.length == e.targetTouches.length) {
	    				console.log('All points are on target element');
	    			}
	    			
	    			if (e.touches.length > 1) {
	    				console.log('Device supports multiple touch points!');
	    			}
	    		}
	    		
	    		if (en === 'touchend') {
	    			console.log('Removed: ' + e.changedTouches.length);
	    			console.log('Remaining on element: ' + e.targetTouches.length);
	    			console.log('Remaining on document: ' + e.touches.length);
	    		}
	    	}
    }
    
    this.handleScrollEvent = function(e) {
    		console.log('scroll');
    }

    this.handleScrollstartEvent = function(e) {
    		console.log('scrollstart');
    }
    
    this.handleScrollendEvent = function(e) {
    		console.log('scrollend');
    }
        
	var pnl = Ext.create('Ext.Container', {
		id:'main-panel',
	    fullscreen: true,
//	    scrollable: 'vertical',
	    	layout: 'fit'
	});

	var touchPnl = Ext.getCmp('main-panel');
//	touchPnl.getScrollable().getScroller().on('scrollstart',this.handleScrollstartEvent);
//	touchPnl.getScrollable().getScroller().on('scroll',this.handleScrollEvent);
//	touchPnl.getScrollable().getScroller().on('scrollend',this.handleScrollendEvent);
	Ext.get('main-panel').on({
            touchstart: this.handleEvent,
            touchend: this.handleEvent,
            touchmove: this.handleEvent,
            touchcancel: this.handleEvent,
            dragstart: this.handleEvent,
            drag: this.handleEvent,
            dragend: this.handleEvent,
            singletap: this.handleEvent,
            tap: this.handleEvent,
            doubletap: this.handleEvent,
            taphold: this.handleEvent,
            swipe: this.handleEvent,
            pinch: this.handleEvent,
            pinchstart: this.handleEvent,
            pinchend: this.handleEvent,
            scope: this
        });
	
	}
});