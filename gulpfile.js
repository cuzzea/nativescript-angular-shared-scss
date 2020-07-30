const gulp = require('gulp');
var format = require('gulp-clang-format');
 
var srcsToFmt = ['src/**/*.ts'];

gulp.task('check-format', function() {
    return gulp.src(srcsToFmt)
        .pipe(format.checkFormat())
        .on('warning', function(e) {
            console.log(e);
            process.stdout.write(e.message);
            process.exit(1);
        });
});
   
gulp.task('format', function() {
    // The base option ensures the glob doesn't strip prefixes
    return gulp.src(srcsToFmt, {base: '.'})
        .pipe(format.format('file'))
        .pipe(gulp.dest('.'));
});