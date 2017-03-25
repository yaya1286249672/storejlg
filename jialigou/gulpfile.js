/**
 * Created by Administrator on 2017/1/12.
 */
var _gulp = require("gulp"),
    _gulpmincss = require("gulp-minify-css"),
    _gulpminihtml = require("gulp-htmlmin"),
    _gulpminjs = require("gulp-uglify"),
    _gulpminiimg = require("gulp-imagemin"),
    _gulpconcat = require("gulp-concat");
_gulp.task("cssmin",function(){
    _gulp.src("./css/*.css")
    .pipe(_gulpmincss())
        .pipe(_gulp.dest("./disk/css"))
});

_gulp.task("jsmin",function(){
    _gulp.src("./js/*.js")
        .pipe(_gulpminjs())
        .pipe(_gulp.dest("./disk/js"))
});

_gulp.task("imgmin",function(){
    _gulp.src("./images/*")
        .pipe(_gulpminiimg())
        .pipe(_gulp.dest("./disk/images"))
});