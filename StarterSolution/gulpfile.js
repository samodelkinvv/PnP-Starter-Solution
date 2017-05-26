/// <vs BeforeBuild='Typescript, Webpack, Sharepoint-Upload' />
var gulp = require("gulp"),
	tsc = require("gulp-typescript"),
	sourcemaps = require('gulp-sourcemaps'),
	srcProject = tsc.createProject('tsconfig.json'),
	spsave = require('gulp-sourcemaps'),
	config = require("./@configuration"),
	spsave = require("gulp-spsave"),
	webpackConfig = require('./webpack.config.js'),
	webpack = require('webpack2-stream-watch');

gulp.task('Typescript', function () {
	return gulp.src("./Site Assets/*.ts")
		.pipe(sourcemaps.init())
		.pipe(srcProject())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./Site Assets"));
})

gulp.task('Sharepoint-Upload', function () {
	let creds = {
		username: config.spsave.username,
		password: config.spsave.password,
	};

	return gulp.src(["./Site Assets/*", "./node_modules/sp-pnp-js/dist/pnp.js", "./bundle.js"])
		.pipe(spsave({
			folder: "SiteAssets",
			checkin: true,
			checkinType: 1,
			siteUrl: config.spsave.siteUrl
		}, creds));
		
})

gulp.task('Webpack', function () {
	return gulp.src('./Site Assets/Alert.ts')
	   .pipe(webpack(require('./webpack.config.js')))
	   .pipe(gulp.dest('.'));
})