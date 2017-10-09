/**
 * Created by Administrator on 2017/9/27.
 */
var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('minifycss', function () {

    return gulp.src(['js/*.js'])
        //将读取的文件合并到 main.js
        .pipe(concat('main.js'))
        //main.css 重命名为 main.min.js
        .pipe(rename({suffix: '.min'}))
        //执行压缩
        .pipe(minifyCSS())
        //输出目录
        .pipe(gulp.dest('js/'))
        //完成压缩提示信息
        .pipe(notify({messafe: 'ok!'}))
});


