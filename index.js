// Your code here


var questionsArr = [
    { question: 'Javascript is the best language?', answer: true },
    { question: 'JS is slowly starting to click?', answer: true },
    { question: 'JS is fun to learn?', answer: true },
    { question: 'JS gives me a headache sometimes?', answer: true },
    { question: 'JS sometimes goes smooth, like maybe TOO SMOOTH.', answer: true },
    { question: 'Sometimes you wait for the impending doom of a code crash', answer: true }


]

function runQuiz() {
    var total = questionsArr.length;
    var trueCount = 0;
    var falseCount = 0;

    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i].question;
        var answer = confirm(question)
        if (answer) {
            trueCount++
        }
        else {
            falseCount++
        }
    }

    const percentage = Math.round((trueCount / total) * 100);

    alert('You answered ' + percentage + '% of questions correctly.')
    console.log(typeof percentage)

}
runQuiz()
