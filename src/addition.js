module.exports = {
    syncAdd: (a, b) => console.log(a + b),
    asyncAdd: (a, b) => {
        setTimeout(() => {
            console.log(a + b)
        }, 5000)
    }
}