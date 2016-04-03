var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var os = require('os');
var open = require('gulp-open');

gulp.task('connect', function() {
  connect.server({
    port: 9000,
    livereload: true
  });
});


// Concat JS task
gulp.task('scripts', function() {
    return gulp.src(['app/**/*.module.js', 'app/**/*.js'])
        .pipe(concat('angularProject.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

// Sass task
gulp.task('sass', function() {
    return gulp.src(['app/**/*.scss', '!app/sass/_*.scss'])
        .pipe(concat('angularProject.scss'))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

// Lint task
gulp.task('lint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Recargar el servidor si hay cambios en el HTML
gulp.task('html', function () {
    gulp.src(['*.html', 'app/**/*.html'])
        .pipe(connect.reload());
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('app/**/*.js', ['lint', 'scripts']);
    gulp.watch(['*.html', 'app/**/*.html'], ['html']);
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch('dist/**/*.*', ['compress']);
});

gulp.task('compress-js', function() {
  return gulp.src('dist/**/*.js')
    .pipe(uglify())
    .pipe(rename("angularProject.min.js"))
    .pipe(gulp.dest('dist/js'));
});

// Sass task
gulp.task('compress-css', function() {
    return gulp.src('dist/css/angularProject.css')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename("angularProject.min.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

//livereload
gulp.task('livereload', function() {
  gulp.src('dist/**/*.*')
    .pipe(connect.reload());
});

var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));


gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open({app: browser}));
});


// Default Task
gulp.task('default', ['lint', 'sass', 'scripts']);

// Compress Task
gulp.task('compress', ['compress-js', 'compress-css']);

gulp.task('serve', ['default', 'compress', 'connect', 'watch', 'open']);