Ext.application({
	name : 'MyApp',

	launch : function() {

		Ext.define('TrackPadUtils', {
			statics : {
				handleScroller: function(evt, view, el) {
					var element = evt;
					var margin = null;
					var scrollerSize = null;
					var containerSize = null;
					if( view.getScrollable() ) { 
						view.scroller = view.getScrollable().getScroller();
						margin = view.element.getHeight()+25;
						scrollerSize = view.scroller.getSize();
						containerSize = view.scroller.getContainerSize();
						if( !view.initialScroll ) {
							view.initialScroll = 0;
						}
	
						if( evt.pageY >= margin && (( scrollerSize.y-containerSize.y )>view.initialScroll) ) {
							view.initialScroll = view.initialScroll+8; 
							view.scroller.scrollTo(containerSize.x,view.initialScroll,true);
						}else if ( evt.pageY < 70 && view.initialScroll > 0) {
							view.initialScroll = view.initialScroll - 8;
							view.scroller.scrollTo(containerSize.x,view.initialScroll,true); 
						}
					}
				}
			}
		});

		//Container override for auto scrolling using track pad
		Ext.define('Wtc.tux.ContainerOverride', {
			override : 'Ext.Container',
			initConfig : function() {
				Ext.apply(this.initialConfig, {});
				this.callParent(arguments);

				//If it is Blackberry, register the handler for mousemove to handle scrolling
				if (Ext.os.is.BlackBerry) {
					var task = Ext.create('Ext.util.DelayedTask', function() {
						TrackPadUtils.handleScroller(this.event, this);
					});

					this.element.on('mousemove', function(event) {
						this.event = event;
						task.delay(30);
						task.setScope(this);
					}, this);
				}
			}

		});

		//List extension to handle Blackberry track pad
		Ext.define('Wtc.tuc.bb.List', {
			xtype : 'bblist',
			extend : 'Ext.dataview.List',

			initialize : function() {
				this.callParent();
				if(Ext.os.is.BlackBerry) {
					//list item tap handling
					this.element.on({
						mouseup : this.handleListTap,
						delegate: '.' + Ext.baseCSSPrefix + 'list-item-body',
						scope : this
					});
		
					//item disclosure icon tap handling
					this.element.on({
						mouseup : this.handleItemDisclosure,
						delegate: '.' + this.getBaseCls() + '-disclosure',
						scope : this
					});
				}
			},
			handleListTap: function(event,target,e) {
				this.onItemTap(this,target,index,e);
			}
		});

	}
});