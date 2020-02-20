const gulp = require('gulp');
const { series } = require('gulp');
const { styles } = require('./styles');
const { scripts } = require('./scripts');
const { templates } = require('./templates');
const { image } = require('./image');
const { svg } = require('./svg');
const { serve } = require('./serve');

function watchFiles() {
  gulp.watch('./dev/pug/**/*.pug', series(templates));
  gulp.watch('./dev/static/styles/**/*.scss', series(styles));
  gulp.watch(['./dev/static/images/general/**/*.{png,jpg,gif}',
      './dev/static/images/content/**/*.{png,jpg,gif}'], series(image));
  gulp.watch('./dev/static/images/svg/*.svg', series(svg));
  gulp.watch('./dev/static/js/**/*.js', series(scripts));
};

exports.watch = series(
  serve,
  watchFiles
);
