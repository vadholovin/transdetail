const { series, parallel } = require('gulp');
const { clean } = require('./clean');
const { fonts } = require('./fonts');
const { libs } = require('./libs');
const { image } = require('./image');
const { templates } = require('./templates');
const { scripts } = require('./scripts');
const { styles } = require('./styles');
const { svg } = require('./svg');

exports.build = series(
  clean,
  parallel(
    templates,
    fonts,
    libs,
    styles,
    image,
    scripts,
    svg
  )
);
