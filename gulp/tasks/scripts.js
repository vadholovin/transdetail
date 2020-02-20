const { src, dest } = require('gulp');
const scriptsPATH = {
  input: "./dev/static/js/",
  ouput: "./build/static/js/"
};

function scripts() {
  return src([scriptsPATH.input + '*.js'])
    .pipe(dest(scriptsPATH.ouput));
};

exports.scripts = scripts;
