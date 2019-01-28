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

async function writeNumbers() {
    let readData = await readFiles(numberFilePath, 'utf8')
    console.log(readData)
    let numbers = readData.map(number => Number(number))
    console.log(numbers)
    let incNumbers = fileops.incrementValues(numbers)
    console.log(incNumbers)
    await writeFiles(`${resources}/numberNew.txt`, incNumbers.join('\n'))
    console.log('Escritura de números exitosa')
}

async function writeNames() {
    let readData = await readFiles(nameFilePath, 'utf8')
    console.log(readData)
    let callNames = fileops.callNames(readData)
    console.log(callNames)
    await writeFiles(`${resources}/nameNew.txt`, callNames.join('\n'))
    console.log('Escritura de nombres exitosa')
}

const executeExercise = async () => {
    await writeNumbers()
    await writeNames()
}

executeExercise()