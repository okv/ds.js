'use strict';

// Add isType methods: isArguments, isFunction, etc
['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'].forEach(
	function(name) {
		exports['is' + name] = function(obj) {
			return toString.call(obj) == '[object ' + name + ']';
		};
	}
);

 exports.isObject = function(obj) {
	return obj === Object(obj);
};

exports.isArray = Array.isArray;
