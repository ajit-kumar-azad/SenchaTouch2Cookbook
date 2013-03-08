Ext.application({
	name : 'MyApp',

	launch : function() {
		
		Ext.define('Wtc.tux.CardPanel', {
			extend: 'Ext.Panel',
			config: {
				layout: {
					type: 'card',
					animation: 'reveal'
				}
			},
			getCurrentItemIdx: function() {
				var curr = this.getActiveItem();
				var items = this.getInnerItems();//exclude docked items
				
				var idx = -1;
				var l = items.length;
				for (var i=0; i<l; i++) {
					if (items[i].id == curr.id) {
						idx = i;
						break;
					}
				}
				
				return idx;
			},
			
			prev: function() {
				var idx = this.getCurrentItemIdx();
				var items = this.getInnerItems();
				
				var l = items.length;
				var o = {
							next:--idx<l-1,
							prev:idx>0
						};
				
				this.setActiveItem(items[idx]);
				return o;
			},
			
			next: function() {
				var idx = this.getCurrentItemIdx();
				var items = this.getInnerItems();
				
				var l = items.length;
				var o = {
							next:++idx<l-1,
							prev:idx>0
						};
				
				this.setActiveItem(items[idx]);
				return o;
			}
			
		});

		var navigate = function(panel, direction){
			var o = panel[direction]();
			Ext.getCmp('move-prev').setDisabled(!o.prev);
		    Ext.getCmp('move-next').setDisabled(!o.next);
		};

		var pnl = Ext.create('Wtc.tux.CardPanel', {
		    title: 'Wizard',
		    fullscreen: true,
		    styleHtmlContent: true,
		    activeItem: 1,
		    items: [
		    	{
		            docked : 'top',
		            xtype: 'toolbar',
		            items: [
		                {
		            id: 'move-prev',
		            text: 'Back',
		            ui: 'back',
		            handler: function(btn) {
		                navigate(btn.up("panel"), "prev");
		            },
		            disabled: true
		        },{xtype: 'spacer'},
		        {
		            id: 'move-next',
		            text: 'Next',
		            ui: 'forward',
		            handler: function(btn) {
		                navigate(btn.up("panel"), "next");
		            }
		        }
		            ]
		        }, {
		        id: 'card-0',
		        style: 'background:#E58A99',
		        html: '<h1>Welcome!</h1><p>Step 1 of 3</p>'
		    },{
		        id: 'card-1',
		        style: 'background:#65B9E0',
		        html: '<h1>There is more...</h1><p>Step 2 of 3</p>'
		    },{
		        id: 'card-2',
		        style: 'background:#B7E488',
		        html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
		    }]
		});
	}
});
