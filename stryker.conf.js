module.exports = function (config) {
    config.set({
        testRunner: 'mocha',
        testFramework: 'mocha',

        mutator: 'javascript',
        mutate: [
            'src/js/**/*.js',
        ],
        files: [
            'src/**/*.js',
            'test/**/*.js',
        ],

        transpilers: ['webpack'],
        reporter: ['clear-text', 'progress'],
        coverageAnalysis: 'off',
        webpack: {
            configFile: 'webpack.test.config.js'
        },
        mochaOptions: {
            files: ['dist/test.bundle.js']
        }
    });
};
