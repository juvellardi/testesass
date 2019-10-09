var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

sass.compiler = require('node-sass');

gulp.task('sass', function(){
	gulp.src('./sass/**/*.scss') //os asteriscos "**/*.css" indica que são todos os arquivos e diretórios com terminações SCSS;
	//caso fosse terminação "/*" ele entenderia que são todos os arquivos, sem distinguir terminação 
		.pipe(sass().on('error', sass.logError)) //pipe = then no gulp
		.pipe(cssnano())
		.pipe(gulp.dest('./css'));
})