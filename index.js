const events = require('./src/events')
const database = require('./src/database')

events.emit('clap')

events.emit('call', 'Natha', (name) => {
    events.emit('greet', name)
})

const objDatabase = new database('Platzi', 'nodejs', 'iztalp')

objDatabase.on('status', status => {
    console.log(`Estado de la Base de Datos: ${status}`)

    if (status === 'open') {
        const student = objDatabase.getTable('students')
        // console.log(`Datos de la tabla students:\n`, student)
        student.forEach(student => {
            console.log(`Estudiante: ${student.name} ${student.lastname}`)
        })
        objDatabase.close()
    }
})

objDatabase.on('getTable', tableName => {
    console.log(`Obteniendo los datos de la tabla ${tableName}`)
})

objDatabase.open()