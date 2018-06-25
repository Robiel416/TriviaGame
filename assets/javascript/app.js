$('#start').on("click", function () {
    game.start();
})

var questions = [{
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
    counter: 20,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter<= 0) {
            console.log("time is up");
           // game.over();

        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $('#subwrapper').prepend('<h2> Time remaining: <span id="counter"> 120</span. Seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2>')
            for (var x = 0; x < questions[i].answers.length; x++) {
                $('#subwrapper').append("<input type='radio' name='question- " + i + "' value='" + questions[i].answers[x] + "'>" + questions[i].answers[x])
            }
        }
    },
    finished: function() {
        $.each($('input[name="questions-1]":checked'),function() {
            if($(this).val()==questions[1].correctAnswer) {
                game.corect++;
            } else {
                game.incorrect++;
            }

            
        })
    }
}
    
//    $('#start').remove();
    //

//loadQuestion: function(){
   // timer = setInterval(game.timer,1000);
   // $('#subwrapper').html('<h3>' +Questions[game.])


