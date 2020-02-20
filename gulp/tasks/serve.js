const browserSync = require('browser-sync').create();

function serve(cb) {
  browserSync.init({
    server: './build'
  });
  cb();
};

function reload(cb) {
  browserSync.reload();
  cb();
}

exports.serve = serve;
exports.reload = reload;
