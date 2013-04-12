Ext.application({
	name : 'MyApp',

	launch: function() {
    
    this.handleEvent = function(e, t, opts, ec) {
	    	if (!Ext.isEmpty(ec.info))
	    		console.log(ec.info.eventName);
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
	    scrollable: 'vertical',
	    	layout: 'fit'
	});

	var touchPnl = Ext.getCmp('main-panel');
	touchPnl.getScrollable().getScroller().on('scrollstart',this.handleScrollstartEvent);
	touchPnl.getScrollable().getScroller().on('scroll',this.handleScrollEvent);
	touchPnl.getScrollable().getScroller().on('scrollend',this.handleScrollendEvent);
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