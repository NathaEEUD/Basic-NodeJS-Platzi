const fs = require('fs')
const fileops = require('./src/fileops')

const resources = './resources'
const numberFilePath = `${resources}/number.txt`
const nameFilePath = `${resources}/name.txt`

function readFiles(path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) throw err
            let arrData = data.split(/\r?\n/)
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

async function writeNumbers(readPath, writePath) {
    let readData = await readFiles(readPath, 'utf8')
    let incNumbers = fileops.incrementValues(readData).join('\n')
    await writeFiles(writePath, incNumbers)
        .then(result => console.log(`${result} de números`))
}

async function writeNames(readPath, writePath) {
    let readData = await readFiles(readPath, 'utf8')
    let callNames = fileops.callNames(readData).join('\n')
    await writeFiles(writePath, callNames)
        .then(result => console.log(`${result} de nombres`))
}

const executeExercise = async () => {
    await writeNumbers(numberFilePath, `${resources}/numberNew.txt`)
    await writeNames(nameFilePath, `${resources}/nameNew.txt`)
}

executeExercise()