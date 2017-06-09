var loopbackslug=require("loopback-slug");

module.exports = function(Model, options) {
	console.log(options);
	Model.observe('before save', (ctx, next) => {
		//get non empty fields from options
		var valid_fields = options.fields.filter((item) => {
			 if (ctx.instance && ctx.instance[item]) { return true; }
		})
		loopbackslug.middleware(Model, ctx, {
			// fields: (Array.isArray(options.fields) ? options.fields : [options.fields]),
			// slug: options.slug_field
			fields: valid_fields,
			slug: options.slug_field,
			remove: "'"
		}, function (err) {
			if (err) return next(err);
			else next(null);
		}
		);
	});
}