const { src, dest } = require('gulp');
const browserSync = require('browser-sync').create();
const scriptsPATH = {
  input: "./dev/static/js/",
  ouput: "./build/static/js/"
};

function scripts() {
  return src([scriptsPATH.input + '*.js'])
    .pipe(dest(scriptsPATH.ouput))
    .pipe(browserSync.reload({
      stream: true
    }));
};

exports.scripts = scripts;
