var faker = require('faker');
var async = require('async');

module.exports = function(app, cb) {
	var dataSource = app.dataSources.mysqlDs; 
	if(dataSource.connected) {     
		seed(dataSource);
	} else {
		dataSource.once("connected", seed(dataSource));
	}

	function seed(dataSource) {
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
			People.create([
				{firstName: faker.name.firstName(), lastName: "O'Connel", jobTitle: faker.name.jobTitle()},
				{firstName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()},
				{firstName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()},
				{firstName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()},
				{firstName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()},
				{firstName: faker.name.firstName(), middleName: faker.name.firstName(), lastName: faker.name.lastName(), jobTitle: faker.name.jobTitle()},
			], cb);
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
}



