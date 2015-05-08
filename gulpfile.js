var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function(){
    gulp.src('./src/reba.less')
        .pipe(less())
        .pipe(gulp.dest('./'));
});
