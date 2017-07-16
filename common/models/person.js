'use strict';

module.exports = function(Person) {
	Person.beforeDestroy = function(next, modelInstance) {
		console.log(modelInstance);
  	next();
	};
};
