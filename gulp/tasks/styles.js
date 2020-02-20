const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const stylesPATH = {
  input: "./dev/static/styles/",
  ouput: "./build/static/css/"
};

function styles() {
  return src(stylesPATH.input + 'styles.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(rename('styles.min.css'))
    .pipe(dest(stylesPATH.ouput))
    .on('end', browserSync.reload);
};

exports.styles = styles;
