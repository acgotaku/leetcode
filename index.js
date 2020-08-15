const context = require.context(process.env.TEST_PATH, true, /\.spec\.js$/)
context.keys().forEach(context)
