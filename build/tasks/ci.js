var gulp = require('gulp');

gulp.task('ci', ['build', 'coveralls']);
