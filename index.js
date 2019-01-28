const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const listOfQuestions = [
    '¿Cuál es tu primer nombre? ',
    '¿Cuál es tu primer apellido? ',
    '¿Cuál es tu edad? '
]

const answerOfQuestion = (rl, oneQuestion) => {
    return new Promise((resolve, reject) => {
        rl.question(oneQuestion, oneAnswer => {
            resolve(oneAnswer)
        })
    })
}

const formOfQuestions = questions => {
    return new Promise(async resolve => {
        let answers = []
        for(const question of questions) {
            let answer = await answerOfQuestion(rl, question)
            answers.push(answer)
        }
        rl.close()
        resolve(answers)
    })
}

const getAnswers = async listOfQuestions => {
    const answers = await formOfQuestions(listOfQuestions)
    console.log(`Hola ${answers[0]} ${answers[1]}, tú edad es ${answers[2]}`)
}

getAnswers(listOfQuestions)