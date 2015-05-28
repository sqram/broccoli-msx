'use strict'

var msx = require('msx');
var Filter = require('broccoli-filter');

module.exports = MsxFilter;

function MsxFilter(tree, options) {
  if (! (this instanceof MsxFilter)) {
    return new MsxFilter(tree, options);
  }

  this.tree = tree;
  this.options = options || {};
  Filter.call(this, tree, options);
}

MsxFilter.prototype = Object.create(Filter.prototype);
MsxFilter.prototype.constructor = MsxFilter;

MsxFilter.prototype.extensions = ['msx', 'js'];
MsxFilter.prototype.targetExtensions = 'js';


MsxFilter.prototype.processString = function(str, relativePath) {
  try {
    return msx.transform(str, this.options);
  } catch (e) {
    throw e.join('\n');
  }
}
