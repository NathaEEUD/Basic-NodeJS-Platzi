const events = require('./src/events')

events.emit('clap')

events.emit('call', 'Natha', (name) => {
    events.emit('greet', name)
})