const add = require('./src/addition')
const sim = require('./src/intensive')

add.syncAdd(1, 3)
add.asyncAdd(2, 4)

sim.simulateAsync()