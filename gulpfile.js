'use strict';
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');

const styles = () => {
    const plugins = [autoprefixer(), cssnano()];
    return src('./src/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(dest('./dist', { sourcemaps: '.' }));
};

const script = () => {
    return src('./src/js/script.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(terser())
        .pipe(dest('./dist', { sourcemaps: '.' }));
};

exports.default = series(styles, script);
