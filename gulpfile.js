var gulp = require('gulp');
var sync = require('browser-sync').create();
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var pages = require('gulp-gh-pages');

//Test Gulp Install
gulp.task('default', function() {
  console.log('hello from gulp');
});

//Spin-up Server and watch files
gulp.task('serve', function() {
  sync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['*.html'],['htmlBuild']);
  gulp.watch(['scss/*.scss'],['scssBuild']);
  gulp.watch(['js/*.js'],['jsBuild']);
});

//Manage HTML files
gulp.task('htmlBuild', function() {
  sync.reload();
});

//Manage CSS-Sass files
gulp.task('scssBuild', ['scssCSS'], function() {
  sync.reload();
});

gulp.task('scssCSS', function() {
  return gulp.src('./scss/*.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write())
    .pipe(gulp.dest('./css'));
});

//Manage JS files
gulp.task('jsBuild', function() {
  sync.reload();
});

gulp.task('jshint', function() {
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Build and Deploy
gulp.task('deploy', ['build'], function() {
    return gulp.src('./dist/**/*')
      .pipe(pages());
});

gulp.task('build', ['staticHTML', 'staticMedia', 'staticCSS', 'staticJS'], function() {
  //no tasks here...???
});

gulp.task('staticHTML', function() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('staticCSS', function() {
  return gulp.src('./css/*.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('staticMedia', function() {
  return gulp.src('./img/*.*')
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('staticJS', function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('./dist/js'));
});
