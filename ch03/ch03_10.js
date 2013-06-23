Ext.application({
                name : 'MyApp',
                launch : function() {
                var cnt = 1;
                var view = Ext.create('Ext.navigation.View', {
                                      title : 'Wizard',
                                      //			useTitleForBackButtonText: true,
                                      //			defaultBackButtonText: '<<',
                                      navigationBar: {
                                      items: [{
                                              text: 'Home',
                                              handler: function() {
                                              view.pop(cnt-1);
                                              cnt = 1;
                                              }
                                              }]
                                      },
                                      fullscreen : true,
                                      items : [{
                                               title : 'Step ' + cnt,
                                               id : 'card-0',
                                               style : 'background:#E58A99',
                                               html : '<h1>Welcome!</h1><p>Step ' + cnt + '</p>'
                                               },
                                               {
                                               docked : 'bottom',
                                               xtype: 'toolbar',
                                               items : [ {
                                                        text : 'Push a new view!',
                                                        handler : function() {
                                                        cnt++;
                                                        view.push({
                                                                  title : 'Step ' + cnt,
                                                                  style : 'background:#65B9E0',
                                                                  html : '<h1>There is more...</h1><p>Step '
                                                                  + cnt + '</p>'
                                                                  });
                                                        }
                                                        }, {
                                                        text: 'Jump to first',
                                                        handler: function() {
                                                        view.pop(cnt-1);
                                                        cnt = 1;
                                                        }
                                                        } ]
                                               } ],
                                      listeners: {
                                      back: function() {
                                      cnt--;
                                      }
                                      }
                                      });
                }
                });