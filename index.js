const context = require.context('./algorithms/javascript', true, /\.spec\.js$/)
context.keys().forEach(context)
