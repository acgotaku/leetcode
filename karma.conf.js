module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'index.js' }
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'index.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader'
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
      watch: true,
      devtool: '#inline-source-map'
    }
  })
}
