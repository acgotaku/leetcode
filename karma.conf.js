module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'index.js' }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'index.js': ['webpack']
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-webpack'
    ],
    webpack: {
      module: {
        rules: [
          { test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        ]
      },
      watch: true
    }
  })
}
