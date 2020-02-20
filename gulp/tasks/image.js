const { src, dest } = require('gulp');
const imgPATH = {
        input: [
          "./dev/static/images/**/*.{png,jpg,gif,svg}",
          '!./dev/static/images/svg/*'
        ],
        ouput: "./build/static/images/"
      };

function image() {
  return src(imgPATH.input)
    .pipe(dest(imgPATH.ouput));
};

exports.image = image;
