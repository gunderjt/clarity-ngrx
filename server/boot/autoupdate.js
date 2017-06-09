module.exports = function(app, cb) {
	var dataSource = app.dataSources.mysqlDs; 
	if(dataSource.connected) {     
		dataSource.autoupdate(null, function (err) {
			if(err) return cb(err);
			return cb();
		});
	} else {
		dataSource.once("connected", function(){
			dataSource.autoupdate(null, function (err) {
				if(err) return cb(err);
				return cb();
			});
		});
	}
}