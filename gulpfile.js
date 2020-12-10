var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

//Move e compila  Bootstrap/Icons scss para Css
gulp.task('sass', () => {
    return gulp.src(['./node_modules/bootstrap/scss/bootstrap.scss', 
                        'node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss', 
                        'node_modules/@fortawesome/fontawesome-free/scss/brands.scss', 
                        'node_modules/@fortawesome/fontawesome-free/scss/solid.scss',
                        'src/assets/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('src/assets/css'))
        .pipe(browserSync.stream());
});

//Move arquivo JS para pasta de assets
gulp.task('js', () => {
    return gulp.src(['./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 
        './node_modules/jquery/dist/jquery.min.js', 'src/assets/js/*.js'])
        .pipe(gulp.dest('src/assets/js'))
        .pipe(browserSync.stream());
});

//Move icons
gulp.task('icons', function() {
    return gulp.src('./node_modules/@fortawesome/fontawesome-free/webfonts/*')
        .pipe(gulp.dest('src/assets/webfonts/'));
});

//Server para Atualizar front quando houver alguma alteração nos arquivos
gulp.task('serve', gulp.series(['sass', 'js', 'icons'], function() {
    browserSync.init({
        server: "./src"
    });

    gulp.watch('src/assets/scss/*.scss', gulp.series(['sass']));
    gulp.watch("src/assets/webfonts/*", gulp.series(['icons']));
    gulp.watch("src/assets/js/*.js").on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
}));


gulp.task('default', gulp.series('serve'));

