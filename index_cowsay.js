const cowsay =  require ('cowsay');
const readline = require ('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(cowsay.say({
  text: "hello! I can <sleep>, <mocking> or <died>",
  e: "0 0",
  T: " "
}));
console.log('*************************');

rl.question('What I do?: ', (answer) => {

  if (answer == 'sleep') {
    console.log(cowsay.think({
      text: "z Z z Z z",
      e: "- -",
      T: ""
    }));
    console.log('*************************');
  }
  else if (answer == 'died') {
    console.log(cowsay.say({
      text: " ......... ",
      e: "XX",
      T: "U"
    }));
    console.log('*************************');
  }
  else if (answer == 'mocking') {
    console.log(cowsay.say({
      text: "Ha ha ha!",
      e: "oO",
      T: " U"
    }));
    console.log('*************************');
  }
  else{
    console.log(cowsay.say({
      text:`I can't ${answer} \n Thank you for nothing`,
      e: "o <",
      T: ""
    }));
    console.log('*************************');
  }

  rl.close();
});