var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Move e compila  Bootstrap scss para Css
gulp.task('sass', () => {
    return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', 
                     'src/assets/scss/*.scss'])
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('src/assets/css'))
        .pipe(browserSync.stream());
});

//Move arquivo JS para pasta de assets
gulp.task('js', () => {
    return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 
        './node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('src/assets/js'))
        .pipe(browserSync.stream());
});


//Server para Atualizar front quando houver alguma alteração nos arquivos
gulp.task('serve', gulp.series(['sass', 'js'], function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch('src/assets/scss/*.scss', gulp.series('sass'));
    gulp.watch("src/assets/js/*.js", gulp.series('js'));
    gulp.watch('src/*.html').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));

