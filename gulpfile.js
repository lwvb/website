// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dest/css'));
});
 
gulp.task('sass:watch', ['sass'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass'], function() {
    gulp.watch('*.scss', ['sass']);
})