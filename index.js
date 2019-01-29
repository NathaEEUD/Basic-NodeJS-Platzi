const cp = require('child_process')

const execCommand = command => {
    cp.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`)
            return
        }
        if (stdout) console.log(`Stdout: \n${stdout}`)
        if (stderr) console.log(`Stderr: \n${stderr}`)
    })
}

execCommand('node ./src/script.js --base=16')