// Include gulp
gulp = require("gulp")

// Include plugins
browserSync = require('browser-sync');
reload = browserSync.reload;
util = require('gulp-util');

var rename = require('gulp-rename');

require('./server/server.js');

var requireDir = require('require-dir');
requireDir('./gulp');
// requireDir('./gulp', { recurse: true });


// Default Task
gulp.task('default',  gulp.parallel('nunjucks', 'sass', 'copy-images' , 'scripts', 'watch', 'browser-sync')); //, 'minify-css' , 'scripts'
