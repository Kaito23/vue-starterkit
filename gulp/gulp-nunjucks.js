var nunjucks = require('gulp-nunjucks-html');

// Compile nunjucks templates
gulp.task('nunjucks', function() {
	return gulp.src('src/pages/*.html')
		.pipe(nunjucks({
			searchPaths: ['src/templates', 'src/sections']
		}))
		.pipe(gulp.dest('public'))
		.pipe(reload({stream: true}));
});