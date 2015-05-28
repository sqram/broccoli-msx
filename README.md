# broccoli-msx

Broccoli plugin for precompiling [Mithril](http://lhorie.github.io/mithril/) msx views into js

## Install

```
npm install --save-dev broccoli-msx
```

## Example

```javascript
var msx = require('broccoli-msx')
  , pickFiles = require('broccoli-static-compiler')
  , mergeTrees = require('broccoli-merge-trees')
  ;

var js = pickFiles('src/js', {
  srcDir: '/',
  destDir: 'js'
})
js = msx(js, {precompiled: false})

module.exports = mergeTrees([js])
```

`.jsx` files are automatically renamed to `.js`

## API

### `msx(tree, [options: {}])`

## Options

`options` - options accepted by 
[`msx.transform()`](https://github.com/insin/msx/#module-api).

`{ harmony: true|false } ` - enables/disables ES6 transforms supported by JSX Transformer. Default: `false`

`{  precompile: true|false }` - enables/disable default precompilation and always output m() calls. Default: `true`


