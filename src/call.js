module.exports = {
    sync: name => console.log(`Hola ${name}! Bienvenido a Node.js`),
    withCallback: function (name, cb) {
        setTimeout (() => {
            cb(name)
        }, 9000)
    },
    withPromise: function (name) {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            }, 1000)
        })
    }
}