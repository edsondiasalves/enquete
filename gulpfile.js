var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var dirBaseStyles = ['app/assets/css/'];
var dirBaseFonts = ['app/assets/fonts/'];
var dirBaseScripts = ['app/assets/js/'];
var dirOutputStyles = 'publish/app/styles';
var dirOutputFonts = 'publish/app/fonts';
var dirOutputScripts = 'publish/app/scripts';
var dirOutputViews = 'publish/app/views';

gulp.task('default', function () {
});

gulp.task('publish', [
    'publish-styles',
    'publish-fonts',
    'publish-scripts',
    'publish-angular-components',
    'publish-views',
    'publish-index'
], function () {
});

gulp.task('clean-publish', function () {
    return del('publish');
});

gulp.task('publish-styles', ['clean-publish'], function () {
    var stream = gulp.src([
        dirBaseStyles + 'bootstrap.min.css',
        dirBaseStyles + 'ui-bootstrap-csp.css',
        dirBaseStyles + '3-col-portfolio.css',
        dirBaseStyles + 'custom.css'
    ])
        .pipe(concat('base.css'))
        .pipe(gulp.dest(dirOutputStyles));
    return stream;
});

gulp.task('publish-fonts', ['clean-publish'], function () {
    var stream = gulp.src(dirBaseFonts + '*.*')
        .pipe(gulp.dest(dirOutputFonts));
    return stream;
});

gulp.task('publish-scripts', ['clean-publish'], function () {
    var stream = gulp.src([
        dirBaseScripts + 'jquery.min.js',
        dirBaseScripts + 'bootstrap.min.js',
        dirBaseScripts + 'angular.min.js',
        dirBaseScripts + 'angular-route.min.js',
        dirBaseScripts + 'angular-ui-router.min.js',
        dirBaseScripts + 'ui-bootstrap-tpls.js',
        dirBaseScripts + 'validate.min.js',
        dirBaseScripts + 'firebase.js',
        dirBaseScripts + 'angularfire.min.js'
    ])
        .pipe(concat('base.js'))
        .pipe(gulp.dest(dirOutputScripts));
    return stream;
});

gulp.task('publish-angular-components', ['clean-publish'], function () {
    var stream = gulp.src([
        'app/app.module.js',
        'app/app.routes.js',
        'app/factories/*.js',
        'app/services/*.js',
        'app/controllers/**/*.js',
        'app/directives/*.js'
    ])
        .pipe(concat('components.js'))
        .pipe(gulp.dest(dirOutputScripts));
    return stream;
});

gulp.task('publish-views', ['clean-publish'], function () {
    var stream = gulp.src('app/views/**/*.html')
        .pipe(gulp.dest(dirOutputViews));
    return stream;
});

gulp.task('publish-index', ['clean-publish'], function () {
    var stream = gulp.src('app/index.html')
        .pipe(gulp.dest('publish/app'));
    return stream;
});