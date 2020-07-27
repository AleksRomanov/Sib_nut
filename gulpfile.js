// VARIABLES & PATHS

let localhost = 'http://localhost:8888/nuts/', // Local domain
    preprocessor = 'scss', // Preprocessor (sass, scss, less, styl) / Preprocessor folder name / Module require const name. Example: themes/mytheme/assets/scss/
    theme = 'nuts', // Theme folder name
    fileswatch = 'html,htm,php,txt,yaml,twig,json,md', // List of files extensions for watching & hard reload (comma separated)
    online = true; // If «false» - Browsersync will work offline without internet connection

let paths = {

    scripts: {
        src: [
            // 'node_modules/jquery/dist/jquery.min.js', // npm vendor example (npm i --save-dev jquery)
            // 'themes/' + theme + '/assets/vendor/lazyload/lazyload.js', // Vendor script plugin example
            // 'modules/system/assets/js/framework.js', // {% framework extras %}
            // 'modules/system/assets/js/framework.extras.js', // {% framework extras %}
            // 'plugins/nms/plugin/assets/js/plugin.js', // Plugin script example
            'themes/' + theme + '/assets/js/app.js' // Theme app.js. Always at the end
        ],
        source: 'themes/' + theme + '/assets/js/main.js',
        mode: `iife`,
        srcLibs: 'themes/' + theme + '/assets/js/libs/*.js'
    },

    deploy: {
        hostname: 'username@yousite.com', // Deploy hostname
        destination: 'yousite/public_html/', // Deploy destination
        include: ['*.htaccess',], // Included files to deploy
        exclude: [ // Excluded files from deploy
            '**/*.sqlite',
            '**/Thumbs.db',
            '**/*.DS_Store',
            'node_modules',
            'gulpfile.js',
            'package.json',
            'package-lock.json',
            'npm-debug.log',
            'themes/' + theme + '/assets/js/app.js',
            'themes/' + theme + '/assets/' + preprocessor,
        ],
    },

}

// LOGIC

const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass');
const scss = require('gulp-sass');
const less = require('gulp-less');
const styl = require('gulp-stylus');
const gulp = require('gulp');
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const rsync = require('gulp-rsync');
const posthtml = require("gulp-posthtml");
const include = require("posthtml-include");
const rename = require("gulp-rename");
const svgstore = require("gulp-svgstore");
const plumber = require(`gulp-plumber`);
const rollup = require(`gulp-better-rollup`);
const commonjs = require(`rollup-plugin-commonjs`);
const nodeResolve = require(`rollup-plugin-node-resolve`);
const babel = require(`rollup-plugin-babel`);

function imagesMinification() {
    return gulp.src('themes/' + theme + '/assets/images/**/*.jpg')
        .pipe(imagemin(

        ))
        .pipe(gulp.dest('themes/' + theme + '/assets/images/'));
}

function browsersync() {
    browserSync.init({
        proxy: localhost,
        notify: false,
        online: online
    })
}

function styles() {
    return src('themes/' + theme + '/assets/' + preprocessor + '/theme.*')
        .pipe(eval(preprocessor)())
        .pipe(concat('theme.min.css'))
        .pipe(autoprefixer({overrideBrowserslist: ['last 10 versions'], grid: true}))
        .pipe(cleancss({level: {1: {specialComments: 0}}}))
        .pipe(dest('themes/' + theme + '/assets/css'))
        .pipe(browserSync.stream())
}

function deploy() {
    return src('/')
        .pipe(rsync({
            root: '/',
            hostname: paths.deploy.hostname,
            destination: paths.deploy.destination,
            include: paths.deploy.include,
            exclude: paths.deploy.exclude,
            recursive: true,
            archive: true,
            silent: false,
            compress: true
        }))
}

function startwatch() {
    watch('themes/' + theme + '/assets/' + preprocessor + '/**/*', styles);
    watch([
        'themes/' + theme + '/assets/js/**/*.js',
        '!themes/' + theme + '/assets/js/*.min.js',
        'themes/' + theme + '/assets/vendor/**/*.js'], scripts);

    watch(['themes/' + theme + '/**/*.{' + fileswatch + '}',
        'plugins/**/*.{' + fileswatch + '}'
    ]).on('change', browserSync.reload);
}

function sprite() {
    return gulp
        .src('themes/' + theme + '/assets/images/svg/**/*.svg')
        .pipe(
            svgstore({
                inlineSvg: true
            })
        )
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest('themes/' + theme + '/assets/images/'));
}

function htm() {
    return src('themes/' + theme + '/partials/sprite.htm')
        .pipe(posthtml([include()]))
        .pipe(dest('themes/' + theme + '/partials/'));
}

// function scripts() {
//     return src(paths.scripts.src)
//         .pipe(concat('theme.min.js'))
//         .pipe(uglify())
//         .pipe(dest('themes/' + theme + '/assets/js'))
//         .pipe(browserSync.stream())
// }

function scripts() {
    return src(paths.scripts.source)
        .pipe(plumber())
        .pipe(
            rollup(
                {
                    plugins: [commonjs(), nodeResolve(), babel()]
                },
                paths.scripts.mode
            )
        )
        // .pipe(uglify())
        .pipe(plumber())
        .pipe(rename({suffix: `.min`}))
        .pipe(gulp.dest('themes/' + theme + '/assets/js'));
}

function scriptsLibs() {
    return gulp
        .src(paths.scripts.srcLibs)
        .pipe(plumber())
        .pipe(concat(`vendor.js`))
        // .pipe(uglify())
        .pipe(rename({suffix: `.min`}))
        .pipe(gulp.dest('themes/' + theme + '/assets/js'));
}

exports.browsersync = browsersync;
exports.assets = parallel(styles, scripts);
exports.styles = styles;
exports.scripts = scripts;
exports.deploy = deploy;
exports.sprite = sprite;
exports.imgMinification = imagesMinification;
exports.default = parallel(sprite, htm, styles, scriptsLibs, scripts, browsersync, startwatch);
