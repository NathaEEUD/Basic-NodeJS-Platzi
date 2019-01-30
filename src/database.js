const EventEmitter = require('events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

class database {
    constructor (databaseName, user, pass) {
        this.databaseName = databaseName
        this.user = user
        this.pass = pass
    }

    open() {
        myEmitter.emit('status', 'opening')
        setTimeout(() => {
            myEmitter.emit('status', 'open')
        }, 3000)
    }

    close() {
        myEmitter.emit('status', 'close')
    }

    getTable(tableName) {
        myEmitter.emit('getTable', tableName)

        const DATA = [{
            name: 'Emir',
            lastname: 'Salazar'
        },
        {
            name: 'Freddy',
            lastname: 'Vega'
        }, 
        {
            name: 'Sacha',
            lastname: 'Lifsyc'
        }]

        return DATA
    }

    on(type, params) {
        myEmitter.on(type, params)
    }
}

module.exports = database