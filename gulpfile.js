var gulp = require('gulp')
var minify = require('gulp-minify')

gulp.task('default', function () {
  // 将你的默认的任务代码放在这
  gulp.src('./src/js/!(*.min.js)')
    .pipe(minify({
      ext: {
        min: '.min.js',
      },
    }))
    .pipe(gulp.dest('./dist/js/common'))
})


