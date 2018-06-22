$('#start').on("click",function(){
   
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
console.log(questions);

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("time is up");
            game.done();

        }
    },
    $('#start').remove();
    timer = setInterval(game.timer,1000);

    for(var i=0; i<questions.length; i++) {
        $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
        for(var j=0; j < questions[i].answers.length, j++;){
            $('#subwrapper').append("<input type='radio' name='question-" +i+"' value='" + questions[i].answers[j]+"'>" +questions[i].answers[j])
        }
    }
}