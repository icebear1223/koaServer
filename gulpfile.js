const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const entry = "./src/server/**/*.js";
const entryIndex = "./app.js";

//开发环境
function builddev(){
    return gulp.src(entry)
        .pipe(babel({
            babelrc:false,
            "plugins":[
                ["@babel/plugin-proposal-decorators",{legacy:true}],
                "@babel/plugin-transform-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('dist'))
}

function buildIndex(){
    return gulp.src(entryIndex)
        .pipe(babel({
            babelrc:false,
            "plugins":[
                "@babel/plugin-transform-modules-commonjs"
            ]
        }))
        .pipe(gulp.dest('dist'))
}

let build = gulp.series(builddev,buildIndex);

gulp.task("default",build);