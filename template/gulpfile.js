var gulp = require('gulp');
var postcss = require('gulp-postcss');
var postcssImport = require('postcss-import');
var tailwindcss = require('tailwindcss');
var cssnext = require('postcss-cssnext');
var cssnano = require('cssnano');

gulp.task('css', function() {
  return gulp
    .src('source/stylesheets/site.css')
    .pipe(
      postcss([
        postcssImport(),
        tailwindcss('./tailwind.js'),
        cssnext(),
        cssnano({ preset: 'default' }),
      ])
    )
    .pipe(gulp.dest('./.tmp/stylesheets'));
});

gulp.task('build', ['css']);

gulp.task('default', ['css'], function() {
  gulp.watch('source/stylesheets/**/*.css', ['css']);
});
