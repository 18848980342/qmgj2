var gulp = require('gulp');
var connect = require('gulp-connect');   // 启动服务器
var less = require('gulp-less');    // 转换成css
var order = require('gulp-order');   // 自动排序
var cleanCss = require('gulp-clean-css');    // 压缩css文件
var autoprefixer = require('gulp-autoprefixer');   // 自动补全
var concat = require('gulp-concat');   // 合并文件
var uglify = require('gulp-uglify');   // js代码压缩
var rev = require('gulp-rev');   // md5
var inject = require('gulp-inject');  
var clean = require('gulp-clean');   // 清理
var sequence = require('gulp-sequence');  // 顺序

gulp.task('default',['build','mywatch','localhost']);

var paths = {
	"js": ["config/qmgj.js","controller/*.js"],
	"less": ["css/*.less"]
}

gulp.task('less',function(){
	return gulp.src( paths.less )
	    .pipe( less() )
	    .pipe( autoprefixer({
	    	browsers: ['last 20 versions'],
	    	cascade: true
	    }) )
	    .pipe( gulp.dest('css/') )
	    .pipe( order() )
	    .pipe( concat('app.min.css') )
	    .pipe( cleanCss() )
	    .pipe( gulp.dest('build/') )
});

gulp.task('js',function(){
	return gulp.src( paths.js )
	    // .pipe( order() )
	    .pipe( concat('app.min.js') )
	    .pipe( uglify() ) 
	    .pipe( gulp.dest('build/') )
});

gulp.task('rev',function(){
	return gulp.src(['build/app.min.css','build/app.min.js'])
	    .pipe( rev() )
	    .pipe( gulp.dest('build/') )
	    .pipe( rev.manifest() )
	    .pipe( gulp.dest('build/') );
});

gulp.task('clean',function(){
	return gulp.src('build/app-*.min.*')
	    .pipe( clean() );
});

gulp.task('inject',function(){
	return gulp.src('indexpage.html')
	    .pipe( inject(gulp.src(['build/app-*.min.css','build/app-*.min.js'])) )
	    .pipe( gulp.dest('./') );
});

gulp.task('build',function(cb){
	return sequence('less','js','clean','rev','inject',cb);
});

gulp.task('localhost',function(){
	return connect.server({
		root: '../project/',  // 静态资源目录
		port: 8081
	});
});

gulp.task('mywatch',function(){
	return gulp.watch('./css/*.less',['less']);
	return gulp.watch(['./config/qmgj.js','./controller/*Controller.js'],['js']);
});