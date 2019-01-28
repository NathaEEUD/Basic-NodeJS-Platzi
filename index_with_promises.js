const fs = require('fs')
const fileops = require('./src/fileops')

const resources = './resources'
const numberFilePath = `${resources}/number.txt`
const nameFilePath = `${resources}/name.txt`

function readFiles(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) throw err
            arrData = data.split(/\r?\n/)
            resolve(arrData)
        })
    })
}

function writeFiles(path, list) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, list, (err, writeResult) => {
            if (err) throw err
            writeResult = 'Escritura exitosa'
            resolve(writeResult)
        })
    })
}

readFiles(numberFilePath, 'utf8')
    .then(numbers => {
        console.log('Lectura exitosa')
        let incNumbers = fileops.incrementValues(numbers)
        console.log(incNumbers)
        return writeFiles(`${resources}/numberNew.txt`, incNumbers.join('\n'))
    })
    .then(writeResult => console.log(writeResult))
    .catch(err => console.log(err))

readFiles(nameFilePath, 'utf8')
    .then(names => {
        console.log('Lectura exitosa')
        let callNames = fileops.callNames(names)
        console.log(callNames)
        return writeFiles(`${resources}/nameNew.txt`, callNames.join('\n'))
    })
    .then(writeResult => console.log(writeResult))
    .catch(err => console.log(err))