Ext.define('Ext.data.proxy.SqlOverride', {
	override: 'Ext.data.proxy.Sql',
	
	read: function(operation, callback, scope) {
        var me = this,
            db = me.getDatabaseObject(),
            model = me.getModel(),
            idProperty = model.getIdProperty(),
            tableExists = me.getTableExists(),
            params = operation.getParams() || {},
            id = params[idProperty],
            sorters = operation.getSorters(),
            filters = operation.getFilters(),
            page = operation.getPage(),
            start = operation.getStart(),
            limit = operation.getLimit(),
            filtered, i, ln;

        params = Ext.apply(params, {
            page: page,
            start: start,
            limit: limit,
            sorters: sorters,
            filters: filters
        });

        operation.setStarted();

        db.transaction(function(transaction) {
            if (!tableExists) {
                me.createTable(transaction);
            }

            me.selectRecords(transaction, id !== undefined ? id : params, function (resultSet, errors) {
                if (operation.process(operation.getAction(), resultSet) === false) {
                    me.fireEvent('exception', me, operation);
                }

                if (!Ext.isEmpty(filters) && filters.length) {
                    filtered = Ext.create('Ext.util.Collection', function(record) {
                        return record.getId();
                    });
                    filtered.setFilterRoot('data');
                    for (i = 0, ln = filters.length; i < ln; i++) {
                        if (filters[i].getProperty() === null) {
                            filtered.addFilter(filters[i]);
                        }
                    }
                    filtered.addAll(operation.getRecords());

                    operation.setRecords(filtered.items.slice());
                    resultSet.setRecords(operation.getRecords());
                    resultSet.setCount(filtered.items.length);
                    resultSet.setTotal(filtered.items.length);
                }

                if (typeof callback == 'function') {
                    callback.call(scope || me, operation);
                }
            });
        });
    }
});
