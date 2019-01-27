const call = require('./src/call')

call.sync('Crash')

call.withCallback('Crash Fernando', call.sync)

call.withPromise('Crashinguis')
    .then(name => call.sync(name))