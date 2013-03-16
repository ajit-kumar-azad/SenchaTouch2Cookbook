Ext.application({
	name : 'MyApp',
	
    launch : function() {

		Ext.define('SearchResult', {
			extend: 'Ext.data.Model',
			config: {
			fields : [ {name : 'kind', type : 'string'}, 
			           {name : 'title',type : 'string'}, 
			           {name : 'htmlTitle',type : 'string'}, 
			           {name : 'displayLink',type : 'string'}, 
			           {name : 'snippet',type : 'boolean',defaultValue : true} ]
			}
		});

		var store = Ext.create('Ext.data.Store', {
			model : 'SearchResult',
			autoLoad : true,
			proxy : {
				type : 'jsonp',
				pageParam: null,
				startParam: null,
				limitParam: null,
				noCache: false,
				url : 'https://www.googleapis.com/customsearch/v1?key='
						+ 'AIzaSyD8nxb7bFwURb6gXqHWz9dFMQw8-bZCvPw'
						+ '&cx=013036536707430787589:_pqjad5hr1a&q=rose&alt=json',
				reader : {
					type : 'json',
					rootProperty : 'items'
				}
			}
		});

		var form;

		var formBase = {
			scrollable : 'vertical',
			items : [ {
				xtype : 'selectfield',
				name : 'user',
				store : store,
				valueField : 'title',
				displayField : 'title'
			} ]
		};

		if (Ext.os.is.Phone) {
			formBase.fullscreen = true;
		} else {
			Ext.apply(formBase, {
				autoRender : true,
				floating : true,
				modal : true,
				centered : true,
				hideOnMaskTap : false,
				height : 385,
				width : 480
			});
		}

		form = Ext.create('Ext.form.FormPanel', formBase);
		Ext.Viewport.add(form);
	}
});