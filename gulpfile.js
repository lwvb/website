// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(gulp.dest('dist/'));
});
 
gulp.task('html:watch', ['html'], function () {
  gulp.watch('./src/*.html', ['html']);
});

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});


gulp.task('default', ['html','sass'], function () {
});

gulp.task('default:watch', ['default'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/*.html', ['html']);
});

