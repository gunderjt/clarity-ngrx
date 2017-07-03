var faker = require('faker');
var async = require('async');
var PEOPLE_N = 40;

//var seed = function(dataSource, cb) {
		//create all models
	async.parallel({
		people: async.apply(createPeoples),
		pages: async.apply(createPages),
	}, function(err, results) {
		if (err) return cb(err);
		return cb();
	});
}

function createPeoples(cb) {
	dataSource.automigrate('Person', function(err) {
		if (err) return cb(err);
		var People = app.models.Person;
		var peoples = [];
		for (var step = 0; step < PEOPLE_N; step++) {
			peoples.push({firstName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()});
		}
		peoples.push({firstName: faker.name.firstName(), middleName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()});
		peoples.push({firstName: faker.name.firstName(), lastName: "O'Connel", jobTitle: faker.name.jobTitle()});
		People.create(peoples, cb);
	});
}

function createPages(cb) {
	dataSource.automigrate("Page", function(err) {
		if (err) return cb(err);
		var Page = app.models.Page;
		Page.create([
			{content: faker.lorem.paragraphs(), public: true, publishDate: faker.date.past()},
			{content: faker.lorem.paragraphs(), public: true, publishDate: faker.date.past()},
			{content: faker.lorem.paragraphs(), public: true, publishDate: faker.date.past()},
			{content: faker.lorem.paragraphs(), public: true, publishDate: faker.date.past()},
			{content: faker.lorem.paragraphs(), public: true, publishDate: faker.date.past()},
			{content: faker.lorem.paragraphs(), public: false, publishDate: faker.date.past()},
		], cb);
	});
}

module.exports = function(app, cb) {
	var dataSource = app.dataSources.mongoDs;
	if(dataSource.connected) {     
		seed(dataSource, cb);
	} else {
		dataSource.once("connected", seed(dataSource, cb));
	}
}



