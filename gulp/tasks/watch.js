const { watch, series } = require('gulp');
const { reload, serve } = require('./serve');
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const { templates } = require('./templates');
const { image } = require('./image');
const { svg } = require('./svg');

function watchFiles() {
  watch('./dev/pug/**/*.pug', series(templates, reload));
  watch('./dev/static/styles/**/*.scss', series(styles, reload));
  watch(['./dev/static/images/general/**/*.{png,jpg,gif}',
      './dev/static/images/content/**/*.{png,jpg,gif}'], series(image, reload));
  watch('./dev/static/images/svg/*.svg', series(svg, reload));
  watch('./dev/static/js/**/*.js', series(scripts, reload));
};

exports.watch = series(
  serve,
  watchFiles
);
