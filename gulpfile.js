'use strict';

const config = require('./gulpconfig.js');
const gulp = require('gulp');


//stylesheets
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

//js

var uglify = require('gulp-uglify');


//img
const imagemin = require('gulp-imagemin');

//server
const connect = require('gulp-connect');

//browser
const browserSync = require('browser-sync').create();




gulp.task('css',function() {
    return gulp.src(config.paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(gulp.dest(config.paths.src +'/css'))
        .pipe(autoprefixer())
        .pipe(cleancss({compatibility: 'ie8'}))
        .pipe(gulp.dest(config.paths.build +'/css'))
});

gulp.task('js',function(){
    return gulp.src(config.paths.js)
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.build + '/js'))
});


//html task
gulp.task('html',function(){
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.build))
});

//img task
gulp.task('img',function(){
    return gulp.src(config.paths.img)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.build + '/img'))

});
gulp.task('fonts', function() {
    gulp.src(path.fonts)
        .pipe(gulp.dest(config.paths.build + '/fonts'))
});

//server
gulp.task('server', function(){
    connect.server({root: config.paths.build, port: config.port});
});

//Gulp serve task - initializes browser synchronization
gulp.task('serve', ['server'], function() {
    browserSync.init(null, config.browserSync);
});


//watchers
gulp.task('watch', function(){
    gulp.watch(config.paths.img, ['img']);
    gulp.watch(config.paths.sass, ['css']);
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
});


gulp.task('default', ['img','css', 'js', 'html', 'serve', 'watch']);
