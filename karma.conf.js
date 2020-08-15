const webpack = require('webpack')

process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true,
    files: [{ pattern: 'index.js' }],
    frameworks: ['jasmine'],
    preprocessors: {
      'index.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary', subdir: '.' }
      ]
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-jasmine',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [['istanbul', {
                  exclude: [
                    'index.js',
                    'algorithms/**/*.spec.js'
                  ]
                }]]
              }
            }
          }
        ]
      },
      watch: true,
      mode: 'development',
      devtool: '#inline-source-map',
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            TEST_PATH: config.path ? JSON.stringify(config.path) : JSON.stringify('./algorithms/javascript')
          }
        })
      ]
    }
  })
}
