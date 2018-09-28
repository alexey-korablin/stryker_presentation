module.exports = function (config) {
    config.set({
        frameworks: ['jasmine', 'browserify'],
        files: [
            'scripts/**/*.js',
            'test/**/*.spec.js'
        ],
        preprocessors: {
            'scripts/**/*.js': ['browserify'],
            'test/**/*.spec.js': ['browserify']
        },
        browsers: ['ChromeNoSandboxHeadless'],
        customLaunchers: {
            ChromeNoSandboxHeadless: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222'
                ]
            }
        },
        browserify: {
            debug: true,
            transform: [['babelify', {presets: ['@babel/preset-env']}]]
        },
        logLevel: config.LOG_INFO,
        // logLevel: config.LOG_DEBUG,
        color: true,
        concurrency: Infinity
    });
}