'use strict';

var utils = require('./utils');

function Cursor(err, docs) {
	this._err = err;
	this._docs = docs;
}

Cursor.prototype.toArray = function(callback) {
	callback = callback || utils.noop;
	callback(this._err, this._docs);
};

Cursor.prototype.skip = function(n) {
	return new Cursor(this._err, this._docs.slice(n));
};

Cursor.prototype.limit = function(n) {
	return new Cursor(this._err, this._docs.slice(0, n));
};

Cursor.prototype.count = function(callback) {
	callback = callback || utils.noop;
	callback(this._err, this._docs.length);
};

exports.Cursor = Cursor;
