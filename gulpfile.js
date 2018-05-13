var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    gulp.src('./css/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
});




gulp.task('default', ['sass']);