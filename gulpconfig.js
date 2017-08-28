"use strict";
const os = require('os');
const browser = os.platform() === 'linux' ? 'google-chrome' : (os.platform() === 'darwin' ? 'google chrome' : (os.platform() === 'win32' ? 'chrome': 'firefox' ));

module.exports = {
    port: 8000,
    browser: browser,
    paths: {
        src: "./src",
        build: "./build",
        html: "./src/index.html",
        sass:"./src/scss/**/**.scss",
        css:"./src/css",
        js: './src/js/**.js',
        componentsJs: './src/js/components/**.js',
        img: './src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    browserSync: {
        proxy: 'http://localhost:8000/index.html',
        files: ['build/**/*.*'],
        browser: browser,
        port: 8001
    }
};
