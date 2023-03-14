/**
* Version: 4.5.3
* 4.5.3: ADD test task & watch add pug/*.js
* 4.5.2: sass img
* 4.5.1: minifyCss
* 4.5.0: remove task that use less & update grammar gulp 4 & add gulp.config.js
* 4.3.7: sass includePaths
* 4.3.6: FIXED task pug
* 4.3.5: ADD customMsg
* 4.3.4: svg task add sass
* 4.3.3: show project name
* 4.3.2: ADD fancy-log
* 4.3.1: ADD merge
* 4.3.0: ADD spritesmith
* 4.2.2: task svg optimization
* 4.2.1: ADD gulp-sass-image
* 4.1.1: Fixed tesk del & minifyCss
* 4.1.0: add changed.cached.gulpif.filter
*/
console.log(`gulp start`);
const sync    = require('browser-sync').create();

const { src, dest, watch, series, parallel } = require('gulp');

const sass           = require('gulp-sass');
sass.compiler        = require('node-sass');
const sassGlob       = require('gulp-sass-glob');
const sassImage      = require('gulp-sass-image');
const size           = require('gulp-size');
const rename         = require('gulp-rename');
// gulp-clean-css: CSS 壓縮套件
const cleanCss       = require('gulp-clean-css');
const sourcemaps     = require('gulp-sourcemaps');
const postcss        = require('gulp-postcss');
const autoprefixer   = require('autoprefixer');


const notify         = require('gulp-notify');
const plumber        = require('gulp-plumber');
const concat         = require('gulp-concat');

const del            = require('del');
const imagemin       = require('gulp-imagemin');
const svgSprite      = require('gulp-svg-sprite');
// connect           = require('gulp-connect');
const spritesmith    = require('gulp.spritesmith');
const merge          = require('merge-stream');

const pugInheritance = require('gulp-pug-inheritance');
const pug            = require('gulp-pug');
const changed        = require('gulp-changed');
const cached         = require('gulp-cached');
const gulpif         = require('gulp-if');
const filter         = require('gulp-filter');
const log            = require('fancy-log');


const config = require('./gulp.config');

console.log(`const end`);
// > sass (generateCSS)
function generateCSS() {
    return src(config.entryPath.sass)
    .pipe(sassGlob())
    .pipe(sourcemaps.init())
    .pipe(sass(config.sassOpt))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(size({title:'style'}))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(config.outputPath.sass))
    .pipe(sync.stream());
}


// 壓縮ＣＳＳ (minifyCss)
function minifyCss() {
    return src(config.css, {allowEmpty: true})
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCss({
        // keepBreaks: true,
        // compatibility: 'ie8,+units.rem',
        debug: true
    }, (details) => {
        console.log(`${details.name} : ${details.stats.originalSize}`);
        console.log(`${details.name} : ${details.stats.minifiedSize}`);
        console.log(`${details.stats.timeSpent} ms`);
    }))
    .pipe(dest(config.outputPath.sass));
}


// > pug (generateHTML)
function generateHTML () {
    return src(config.entryPath.pug)
    /////////////////////////////////////////////////////////////////////////
    // https://medium.com/@toumasaya/gulp-fighting-4-packages-51e7a2b7f61b //
    /////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////
    //https://github.com/pure180/gulp-pug-inheritance //
    ////////////////////////////////////////////////////
    //only pass unchanged *main* files and *all* the partials
    .pipe(changed('./', {extension: '.html'}))
    .on('end', function(){ log('1...'); })

    //filter out unchanged partials, but it only works when watching
    .pipe(gulpif(global.isWatching, cached('pug')))
    .on('end', function(){ log('2...'); })

    //find files that depend on the files that have changed
    .pipe(pugInheritance({basedir: config.basedir.pug, extension: '.pug',  skip: 'node_modules'}))
    .on('end', function(){ log('3...'); })

    //filter out partials (folders and files starting with "_" )
    .pipe(filter(function (file) {
        log(!/\/_/.test(file.path))
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))
    .on('end', function(){ log('4...'); })

    .pipe(pug(config.pugOpt))
    .on('end', function(){ log('5...'); })
    .pipe(dest(config.outputPath.pug))
    .on('end', () => {
        sync.reload();
        log('sync.reload');
    });
}

// > image min
function imgMin (){
    var onError = (err) => {
        notify.onError({
                    title:    "Gulp image-min",
                    subtitle: "Failure!",
                    message:  "Error: <%= error.message %>"
                })(err);
        this.emit('end');
    };


    return src(config.entryPath.imgMinify)
    .pipe(imagemin())
    .pipe(dest(config.outputPath.img))
    .on('end', () => {
        return del(config.entryPath.imgMinify)
    });
}

// > sass img
function sassImg(){
    return src(config.entryPath.sassImg)
    .pipe(sassImage({
        // targetFile: '_generated-imagehelper.scss', // default target filename is '_sass-image.scss'
        // template: 'your-sass-image-template.mustache',
        images_path: "./src/sass_img/",
        css_path: "./dist/public/css",
        // prefix: 'icon-'
    }))
    .pipe(dest(config.basedir.sass));
}


function script() {
    return src(config.entryPath.js)
    .pipe(concat('script.js'))
    .pipe(dest(config.outputPath.js))
    .on('end', () => {
        sync.reload();
    });
}



function browserSync() {
    sync.init({
        ui: {
            port: 8083
        },
        server: {
            baseDir: `./dist`
        },
        port: config.port
    });

    console.log('=================================');
    console.log( config.project + " serving!!");
    console.log('=================================');


    global.isWatching = true;

    watch(config.entryPath.sass, series(generateCSS, minifyCss));
    // watch("./app/*.html").on("change", (path, stats) => {
    //     console.log('=================================');
    //     console.log(`File ${path} was changed (${stats})`);
    //     console.log('=================================');
    //     sync.reload();
    // });
    watch(["./dist/public/js/*.js", "./dist/public/js/page/*.js"]).on("change", (path, stats) => {
        console.log('=================================');
        console.log(`File ${path} was changed (${stats})`);
        console.log('=================================');
        sync.reload();
    });

    watch(config.entryPath.pug, generateHTML);
    watch(config.entryPath.js, script);
}

function test() {
    console.log(`${config.basedir.pug}*.js`);
}




exports.sass = generateCSS;
exports.pug = generateHTML;
exports.imgMin = imgMin;
exports.sassImg = sassImg;
exports.test = test;

exports.default = series(browserSync, sass, script);
