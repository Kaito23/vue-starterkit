gulp.task('copy-images', function () {
	gulp.src('src/img/*')
		.pipe(gulp.dest('./public/img'));
});