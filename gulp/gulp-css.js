var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src(['src/sass/main.scss'])
		.pipe(sass().on('error', util.log))
        //.pipe(rename('pinfra.css'))
		.pipe(gulp.dest('public/css'))
		.pipe(reload({stream: true}));
});

/*
gulp.task('minify-css', () => {
  return gulp.src('css/fs_main.css')
    .pipe(cleanCSS({}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/min/'));
});

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css/min'));
});*/

/*
var csslint = require('gulp-csslint');

var cssLintConfig = {
    'important':false
}


*/