/*#####################################################################################################################
# DESCRIPTION
#####################################################################################################################*/

/*   Gulp tasks for automation of code preparation for production. To run a task, open a terminal, go to the project
root and type 'gulp [task_name]', where task_name is the name of the task you want to run. If you do not specify a
task, the server task runs by default. */

/*#####################################################################################################################
# DEPENDENCIES
#####################################################################################################################*/
const
  gulp        = require('gulp'),
  prefixer    = require('gulp-autoprefixer')
  babel       = require('gulp-babel'),
  concatJS    = require('gulp-concat'),
  concatCSS   = require('gulp-concat-css'),
  connect     = require('gulp-connect'),
  cleanFiles  = require('gulp-clean'),
  compileSCSS = require('gulp-sass'),
  minCSS      = require('gulp-clean-css'),
  minHTML     = require('gulp-htmlmin'),
  minIMG      = require('gulp-imagemin'),
  minJS       = require('gulp-uglify-es').default,
  renameFiles = require("gulp-rename"),
  replaceHTML = require('gulp-html-replace');

/*#####################################################################################################################
# PATHS
#####################################################################################################################*/
const
  distDir    = './dist/',
  distAssets = distDir + 'assets/',
  distHTML   = distDir + 'views/',
  distCSS    = distAssets + 'css/',
  distIMG    = distAssets + 'img/',
  distJS     = distAssets + 'js/',
  srcDir     = './src/',
  srcApp     = srcDir + 'app/',
  srcAssets  = srcDir + 'assets/',
  srcHTML    = srcDir + 'views/',
  srcCSS     = srcAssets + 'css/',
  srcIMG     = srcAssets + 'img/',
  srcJS      = srcAssets + 'js/',
  tmpDir     = './tmp/',
  tmpJS      = tmpDir + 'js/';

/*#####################################################################################################################
# CONFIGURATIONS
#####################################################################################################################*/
const
  options = {
    "minHTML" : {
      "collapseWhitespace": true,
      "removeComments": true,
      "processConditionalComments": true,
      "minifyCSS": true,
      "minifyJS": true
    },
    "babel" : {
      "presets": [
        "es2015"
      ],
      "plugins": [
        "transform-es2015-arrow-functions",
        "transform-async-to-generator",
        "angularjs-annotate"
      ]
    }
  };

/*#####################################################################################################################
# TASKS
#####################################################################################################################*/

/*---------------------------------------------------------------------------------------------------------------------
- Delete older css
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('cleanCSS', function() {
  return gulp.src(distCSS, {read: false})
    .pipe(cleanFiles());
});

/*---------------------------------------------------------------------------------------------------------------------
- Delete older views
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('cleanHTML', function() {
  return gulp.src(distHTML, {read: false})
    .pipe(cleanFiles());
});

/*---------------------------------------------------------------------------------------------------------------------
- Delete older images
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('cleanIMG', function() {
  return gulp.src(distIMG, {read: false})
    .pipe(cleanFiles());
});

/*---------------------------------------------------------------------------------------------------------------------
- Delete older js
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('cleanJS', function() {
  return gulp.src(distJS, {read: false})
    .pipe(cleanFiles());
});

/*---------------------------------------------------------------------------------------------------------------------
- Transform angular modules and controllers with babel
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('annotate', function() {
  return gulp.src(srcApp + '**/*.js')
    .pipe(babel(options['babel']))
    .pipe(gulp.dest(tmpJS));
});

/*---------------------------------------------------------------------------------------------------------------------
- Sass compile
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('compileSCSS', function() {
  return gulp.src(srcCSS + 'guikifix/guikifix.scss')
    .pipe(compileSCSS().on('error', compileSCSS.logError))
    .pipe(gulp.dest(srcCSS + 'guikifix/'));
});

/*---------------------------------------------------------------------------------------------------------------------
- CSS concat and minify
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('minCSS', ['compileSCSS', 'cleanCSS'], function() {
  return gulp.src([
      srcCSS + 'bootstrap/bootstrap.min.css',
      srcCSS + 'guikifix/guikifix.css'
  ])
    .pipe(prefixer().on('error', function(e){console.log(e);}))
    .pipe(concatCSS("bundle.css"))
    .pipe(minCSS({keepBreaks:false}))
    .pipe(renameFiles("bundle.min.css"))
    .pipe(gulp.dest(distCSS + 'bundle/'));
});

/*---------------------------------------------------------------------------------------------------------------------
- HTML replace CSS & JavaScript
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('replaceHTML', function() {
  return gulp.src(srcDir + 'index.html')
    .pipe(replaceHTML({'css': './assets/css/bundle/bundle.min.css', 'js': './assets/js/bundle/bundle.min.js'}))
    .pipe(gulp.dest(tmpDir));
});

/*---------------------------------------------------------------------------------------------------------------------
- Views minify
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('minViews', ['cleanHTML'], function() {
  return gulp.src(srcHTML + '**/*.html')
    .pipe(minHTML(options['minHTML']))
    .pipe(gulp.dest(distHTML));
});

/*---------------------------------------------------------------------------------------------------------------------
- Index minify
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('minIndex', ['replaceHTML'], function() {
  return gulp.src(tmpDir + 'index.html')
    .pipe(minHTML(options['minHTML']))
    .pipe(gulp.dest(distDir));
});

/*---------------------------------------------------------------------------------------------------------------------
- HTML minify
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('minHTML', ['minViews', 'minIndex'], function() {
  return gulp.src(tmpDir + 'index.html', {read: false})
    .pipe(cleanFiles());
});

/*---------------------------------------------------------------------------------------------------------------------
- Images minify
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('minIMG', ['cleanIMG'], function() {
  return gulp.src(srcIMG + '*')
    .pipe(minIMG())
    .pipe(gulp.dest(distIMG));
});

/*---------------------------------------------------------------------------------------------------------------------
- JS concat and minify
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('minJS', ['annotate', 'cleanJS'], function() {
  return gulp.src([
    srcJS + 'jquery/jquery.min.js',        // jQuery 3.2.1
    srcJS + 'bootstrap/bootstrap.min.js',  // Bootstrap 3.3.7
    srcJS + 'angular/angular.min.js',      // Angular
    srcJS + 'angular/plugins/*.js',        // Angular plugins
    tmpJS + 'modules/*.js',                   // Angular modules
    tmpJS + 'controllers/*.js',               // Angular controllers
    tmpJS + 'directives/*.js'                 // Angular directives
  ])
    .pipe(concatJS('bundle.js'))
    .pipe(minJS().on('error', function(e){console.log(e);}))
    .pipe(renameFiles("bundle.min.js"))
    .pipe(gulp.dest(distJS + 'bundle/'));
});

/*---------------------------------------------------------------------------------------------------------------------
- Build
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('build', ['minCSS', 'minHTML', 'minIMG', 'minJS'], function() {
  return gulp.src(tmpDir, {read: false})
    .pipe(cleanFiles())
});

/*---------------------------------------------------------------------------------------------------------------------
- Watch SCSS files
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('watchSCSS', function() {
  return gulp.watch(srcCSS + '**/*.scss', ['compileSCSS']);
});

/*---------------------------------------------------------------------------------------------------------------------
- Watch CSS files
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('watchCSS', function() {
  return gulp.watch(srcCSS + '**/*.css', ['minCSS']);
});

/*---------------------------------------------------------------------------------------------------------------------
- Watch HTML files
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('watchHTML', function() {
  return gulp.watch(srcHTML + '**/*.html', ['minHTML']);
});

/*---------------------------------------------------------------------------------------------------------------------
- Watch IMG files
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('watchIMG', function() {
  return gulp.watch(srcIMG + '*', ['minIMG']);
});

/*---------------------------------------------------------------------------------------------------------------------
- Watch JS files
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('watchJS', function() {
  return gulp.watch([srcApp + '**/*.js', srcJS + '**/*.js'], ['minJS']);
});

/*---------------------------------------------------------------------------------------------------------------------
- Starts a develop server
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('dev', ['compileSCSS', 'watchSCSS'], function() {
  connect.server({root: srcDir, hostname: 'localhost', port: 4224});
});

/*---------------------------------------------------------------------------------------------------------------------
- Starts a production server
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('prod', ['build', 'watchSCSS', 'watchCSS', 'watchHTML', 'watchIMG', 'watchJS'], function() {
  connect.server({root: distDir, hostname: 'localhost', port: 4224});
});

/*---------------------------------------------------------------------------------------------------------------------
- Default
---------------------------------------------------------------------------------------------------------------------*/
gulp.task('default', ['dev']);
