let gulp = require('gulp');
let zip = require('gulp-zip');

gulp.task('zip', () => {
  gulp.src(['*branding_skin/**'])
    .pipe(zip('skin.zip'))
    .pipe(gulp.dest('.'))
});
