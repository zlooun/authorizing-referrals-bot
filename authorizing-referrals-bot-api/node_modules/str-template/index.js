var _ = require('lodash');

var regexp = /\${([^}]+)}/ig;

var interpolate = module.exports = function interpolate(template, object, options) {

	options = options || {
		failsafe: true
	};

	return template.replace(regexp, function(match, index, string) {
		var path = match.substring(2, match.length-1);
		var value = _.get(object, path);
		
		if (!value && !options.failsafe) {
			throw new Error('`' + path + '` is not found in ' + JSON.stringify(object));
		}

		return value || match;
	});
};