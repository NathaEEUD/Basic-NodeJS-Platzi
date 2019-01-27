module.exports = {
    greet: name => console.log(`Hola ${name}! Sientes la asincronia?`),
    withPromise: function (name, lastname) {
        console.log('Llamando función con promesa...')
        return new Promise ((resolve, reject) => {
            console.log('Ejecutando espera...')
            setTimeout(() => {
                console.log('Resolviendo la espera!')
                resolve(`${name} ${lastname}`)
            }, 5000)
        })
    }
}