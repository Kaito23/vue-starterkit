let concat = require('gulp-concat');

gulp.task('scripts', function() {
	return gulp.src(['src/scripts/*'])
		.pipe(concat({ path: 'main.js' }))
		.pipe(gulp.dest('./public/script'));
});
