const math = require("./math")
const greet = require("./greetings")
const hello = require("./greetings/hello")

console.log(math.add(2, 2))
console.log(math.substract(2, 2))
console.log(math.multiply(2, 2))
console.log(math.divide(2, 2))

console.log(greet.greet('World'))

console.log(hello.sayHello('World'))