// Include gulp
gulp = require("gulp")

// Include plugins
browserSync = require('browser-sync');
reload = browserSync.reload;
util = require('gulp-util');

var rename = require('gulp-rename');

function startBackendServer() {
	require('./server/server.js');
}

var requireDir = require('require-dir');
requireDir('./gulp');
// requireDir('./gulp', { recurse: true });


// Default Task
gulp.task('default',  gulp.parallel(startBackendServer, 'nunjucks', 'sass', 'copy-images' , 'scripts', 'watch', 'browser-sync')); //, 'minify-css' , 'scripts'

gulp.task('test',  gulp.parallel('nunjucks', 'sass', 'scripts')); //, 'minify-css' , 'scripts'
