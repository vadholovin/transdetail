const { series } = require('gulp');
const { build } = require('./build');
const { watch } = require('./watch');

exports.dev = series(
  build,
  watch
);
