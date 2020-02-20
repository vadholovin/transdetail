const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');

const path = {
  scripts: [
    'node_modules/slick-carousel/slick/slick.min.js',
    'node_modules/owl.carousel/dist/owl.carousel.min.js',
    'node_modules/jquery-validation/dist/jquery.validate.min.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
  ],
  styles: [
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
    'node_modules/magnific-popup/dist/magnific-popup.css',
  ]
}


function libsJS() {
  return src(path.scripts)
    .pipe(concat('libs.min.js'))
    .pipe(dest('./build/static/libs/'));
};

function libsCSS() {
  return src(path.styles)
    .pipe(concat('libs.min.css'))
    .pipe(dest('./build/static/libs/'));
};

exports.libs = series(libsJS, libsCSS);
