gulp.task('browser-sync', function () {
	var files = [
		'sass/*.scss',
		'public/*.html',
		'pages/*.html',
		'pages/templates/**/*.njk'
	];
	browserSync.init(files, {
		server: {
			baseDir: './public'
		}
	});
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', gulp.series('sass'));
	gulp.watch('src/scripts/*.js', gulp.series('scripts'));
	gulp.watch('src/img/**/*', gulp.series('copy-images'));
	gulp.watch('src/templates/**/*.njk', gulp.series('nunjucks'));
	gulp.watch('src/pages/**/*.njk', gulp.series('nunjucks'));
});
