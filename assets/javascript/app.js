$('#start').on("click",function(){
    for(var i=0; i<questions.length; i++) {
        $('#inside').append('<h2>' + questions[i].question + '</h2>')
        for(var j=0; j < questions[i].answers.length, j++;){
            $('#inside').append("<input type='radio' name='question-" +i+"' value='" + questions[i].answers[j]+"'>" +questions[i].answers[j])
        }
    }
})

var questions = [ {
    question: "what is this question?",
    answers: ["True", "False", "Orange", "Green"],
    correctAnswer: "Orange"
}, {
    question: "what is this question?",
    answers: ["True", "False", "Orange", "Green"],
    correctAnswer: "False"
}, { 
    question: "what is this question?",
    answers: ["True", "False", "Orange", "Green"],
    correctAnswer: "Green"
}, {
    question: "what is this question?",
    answers: ["True", "False", "Orange", "Green"],
    correctAnswer: "Orange"
}, {
    question: "what is this question?",
    answers: ["True", "False", "Orange", "Green"],
    correctAnswer: "Orange"
}];