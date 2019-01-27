const call = require('./src/call')

async function callWithAsync() {
    const fullname = await call.withPromise('Crash', 'Fernando')
    call.greet(fullname)
}

callWithAsync()