const fs = require('fs')
const fileops = require('./src/fileops')

/*fs.readFile('./resources/number.txt', 'utf8', (err, numberText) => {
    if (err) throw err
    // console.log(numberText)
    const numbers = numberText.split(/\r?\n/).map(number => Number(number))
    console.log(numbers)
    let incValues = fileops.incrementValues(numbers)
    console.log(incValues)

    fs.writeFile('./resources/numberNew.txt', incValues.join('\n'), (err, result) => {
        if (err) throw err
    })
})*/

fs.readFile('./resources/name.txt', 'utf8', (err, nameText) => {
    if (err) throw err
    // console.log(nameText)
    // console.log(typeof(nameText))
    const names = nameText.split(/\r?\n/)
    console.log(names)
    let callNames = fileops.callNames(names)
    console.log(callNames)

    fs.writeFile('./resources/nameNew.txt', callNames.join('\n'), (err, result) => {
        if (err) throw err
    })
})