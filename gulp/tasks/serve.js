const browserSync = require('browser-sync').create();

function serve() {
  browserSync.init({
    server: './build'
  });
};

exports.serve = serve;
