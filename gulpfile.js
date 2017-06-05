// This is a sample Gulp file for your reference
// Feel free to remove and implement your own build process instead

var gulp = require('gulp')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var less = require('gulp-less')
var path = require('path')


gulp.task('copy-images', function(){
  return gulp.src(
          ['./assets/images/**']
      )
      .pipe(gulp.dest('./dist/images/'))
})

gulp.task('copy-fonts', function(){
  return gulp.src(
          ['./assets/css/fonts/**']
      )
      .pipe(gulp.dest('./dist/css/fonts/'))
})

gulp.task('copy', ['copy-images', 'copy-fonts'], function(){})

gulp.task('css', function(){
  return gulp.src(
          [
              './assets/css/bootstrap.css',
              './assets/css/themify-icons.css',
              './assets/css/flexslider.css',
              './assets/css/lightbox.css',
              './assets/css/ytplayer.css',
              './assets/css/theme-fire.css',
              './assets/css/font-robotcondensed.css',
              './assets/css/custom.css',
              './assets/css/animate.css'

          ]
      )
      .pipe(sourcemaps.init())
      .pipe(minifyCSS())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
      .pipe(gp_concat('style.min.css'))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('./dist/css/'))
})


gulp.task('style', ['css'], function(){})


gulp.task('js', function(){
  return gulp.src(
          [
              './assets/js/jquery.min.js',
              './assets/js/bootstrap.min.js',
              './assets/js/flickr.js',
              './assets/js/flexslider.min.js',
              './assets/js/lightbox.min.js',
              './assets/js/masonry.min.js',
              './assets/js/twitterfetcher.min.js',
              './assets/js/spectragram.min.js',
              './assets/js/ytplayer.min.js',
              './assets/js/countdown.min.js',
              './assets/js/smooth-scroll.min.js',
              './assets/js/parallax.js',
              './assets/js/scripts.js',
              './assets/js/custom.js'
          ]
      )
      .pipe(sourcemaps.init())
      .pipe(gp_concat('gulp-concat.js'))
      .pipe(gulp.dest('./assets/min/'))
      .pipe(gp_uglify())
      .pipe(gp_rename('vendor.min.js'))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest('./dist/js/'))
});

// custom app logic for your project:
gulp.task('app', function(){
  return gulp.src(
          [
              './assets/js/app.js'
          ]
      )
      .pipe(sourcemaps.init())
      .pipe(gp_uglify())
      .pipe(gp_rename('app.min.js'))
      .pipe(sourcemaps.write(''))
      .pipe(gulp.dest('./dist/app/'))
});

// specify watch files here:
gulp.task('watch', function() {
    gulp.watch(['./assets/js/**.js', './assets/css/**', './assets/less/**', './assets/images/**'], ['prod'])
})

gulp.task('prod', ['copy', 'style', 'js', 'app'], function(){})
gulp.task('default', ['copy', 'style', 'js', 'app', 'watch'], function(){})



