require("babel-register")({
    "plugins": [
    ]
});
const cssRequireHook = require('css-modules-require-hook');
const sass = require('node-sass');
cssRequireHook({
    generateScopedName: '[path][name]__[local]',
    extensions: [ '.scss', '.css' ],
    preprocessCss: data => sass.renderSync({ data }).css
});
require('./server');