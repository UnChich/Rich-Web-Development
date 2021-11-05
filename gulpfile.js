const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const browserSync = require("browser-sync");

// sass compile function
function style() {
  return src("./css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css"));
}

// watch changes in sass file and auto compile

function sassWatch() {
  watch("./css/*.scss", style);
}

function sync() {
  var files = ["./*.html", "./css/*.css", "./js/*.js"];
  browserSync.init(files, {
    server: {
      baseDir: "./",
    },
  });
}

exports.start = parallel(sync, sassWatch);
