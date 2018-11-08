var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('source/sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('source/css'))
        .pipe(browserSync.reload({stream: true}))
});

    
gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: './source' 
        },
        notify: true
    });
});


gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('source/sass/**/*.scss', ['sass']);
    gulp.watch('source/*.html', browserSync.reload);
    gulp.watch('source/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);