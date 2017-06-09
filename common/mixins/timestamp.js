module.exports = function(Model, options) {
	// Model is the model class
	// options is an object containing the config properties from model definition
	Model.defineProperty('created', {type: Date, default: '$now'});
	Model.defineProperty('modified', {type: Date, default: '$now'});

	Model.observe('before save', (ctx, next) => {
		if (ctx.options && ctx.options.skipUpdatedAt) { return next(); }
		if (ctx.instance) {
			ctx.instance["modified"] = new Date();
		} else {
			ctx.data["modified"] = new Date();
		}
		return next();
	});
}