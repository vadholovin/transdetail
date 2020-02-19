const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const filter = require('gulp-filter');
const prettify = require('gulp-jsbeautifier');

module.exports = function () {
  $.gulp.task('pug', () => {
    return $.gulp.src('./dev/pug/*.pug')
      .pipe(plumber())
      .pipe(filter(file => {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe(pug())
      .pipe(prettify({
        braceStyle: 'expand',
        indentSize: 2,
        indentWithTabs: false,
        indentInnerHtml: true,
        preserveNewlines: true,
        endWithNewline: true,
        wrapLineLength: 120,
        maxPreserveNewlines: 50,
        wrapAttributesIndentSize: 1,
        unformatted: ['use'],
        "html": {
          "end_with_newline": true,
          "indent_size": 2,
          preserveNewlines: true,
          "indent-empty-lines": true,
          wrapAttributesIndentSize: 1,
          inline: [],
        }
      }))
      .pipe($.gulp.dest('./build/'))
      .on('end', $.browserSync.reload);
  });
};