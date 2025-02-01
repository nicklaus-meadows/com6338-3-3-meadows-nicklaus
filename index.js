// Your code here

function runQuiz() {
    var questionsArr = [
       {question1: 'Javascript is the best language.', answer: true},
       {question2: 'JS is slowly starting to click.', answer: true},
       {question3: 'JS is fun to learn.', answer: true},
       {question4: 'JS gives me a headache sometimes.', answer: true},
       {question5: 'JS sometimes goes smooth, like maybe TOO SMOOTH.', answer: true},
       {question6: 'Sometimes you wait for the impending doom of a code crash', answer: true}


    ]

    var trueCount = 0

    for (var i = 0; i < questionsArr.length; i++) {
        var questions = questionsArr[i]
        var answer = confirm(questions)
        if (answer) {
            trueCount++
        }
    }
    
}