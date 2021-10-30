'use strict';
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const styles = () => {
    const plugins = [autoprefixer(), cssnano()];
    return src('./src/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(dest('./dist', { sourcemaps: '.' }));
};

exports.default = series(styles);
