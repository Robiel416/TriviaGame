$(document).ready(function() {

	var questions = [
		{	
			question: "Which player wears jersey #3?",
			answers: ["CJ Miles", "Chris Boucher", "Danny Green", "OG Anunoby"],
			correct: "OG Anunoby",
			image: "assets/images/og.png"
			
		},
		{	
			question: "Which player wears jersey #24?",
			answers: ["Norman Powell", "Malachi Richardson", "Kyle Lowry", "Pascal Siakam"],
			correct: "Norman Powell",
			image: "assets/images/normanpowell.png"
			

		},
		{
			question: "Which player wears jersey #2?",
			answers: ["Malachi Richardson", "Kawhi Leonard", "Lorenzo Brown", "Fred Vanvleet"],
			correct: "Kawhi Leonard",
			image: "assets/images/kawhileonard.png"
			
		},
		{	
			question: "Which player wears jersey #7?",
			answers: ["Jonas Valanciunas", "Kyle Lowry", "Delon Wright", "CJ Miles"],
			correct: "Kyle Lowry",
			image: "assets/images/kylelowry.png"
			
		},
		{
			question: "Which player wears jersey #17?",
			answers: ["Greg Monroe", "Chris Boucher", "Fred Vanvleet", "Jonas Valanciunas"],
			correct: "Jonas Valanciunas",
			image: "assets/images/jonasvalanciunas.png"
			
		},
		{
			question: "Which player wears jersey #43?",
			answers: ["Pascal Siakam", "Serge Ibaka", "Jordan Loyd", "Greg Monroe"],
			correct: "Pascal Siakam",
			image: "assets/images/pascalsiakam.png"
		},
		{
			question: "Which player wears jersey #14?",
			answers: ["Greg Monroe", "Malachi Richardson", "CJ Miles", "Danny Green"],
			correct: "Danny Green",
			image: "assets/images/dannygreen.png"
		
		},
		{
			question: "Which player wears jersey #55?",
			answers: ["Fred Vanvleet", "Serge Ibaka", "Delon Wright", "Chris Boucher"],
			correct: "Delon Wright",
			image: "assets/images/delonwright.png"
			
		},
		{
			question: "Which player wears jersey #43?",
			answers: ["Jordan Loyd", "Lorenzo Brown", "Chris Boucher", "Pascal Siakam"],
			correct: "Pascal Siakam",
			image: "assets/images/pascalsiakam.png"
			
		},
		{
			question: "Which player wears jersey #9?",
			answers: ["Malachi Richardson", "Jordan Loyd", "Serge Ibaka", "Lorenzo Brown"],
			correct: "Serge Ibaka",
			image: "assets/images/sergeibaka.png"
			
		}
	];

	var timeRemaining = 15;
	var timer;
	var currentQuestion = -1;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var answerImage = $("<img>");

	

	$("#startOver").hide();


	function countdown() {
		timeRemaining --;
		$("#time").text("Time Remaining: " + timeRemaining  + " seconds");
		if (timeRemaining  == 0) {
			clearInterval(timer);
			$("#question").empty();
			$("#answers").empty();
			$("#rightWrong").html("Out of Time!");
			$("#correctAnswer").html("The Correct Answer is " + questions[currentQuestion].correct);
			answerImage.attr("src", questions[currentQuestion].image);
			$("#img").html(answerImage);
			unanswered++;
			setTimeout(start, 5000);
		};
	};

	function displayAns(array) {
		for (var i = 0; i<array.length; i++) {
			var options = $("<button>");
			options.addClass("options");
			options.attr("data-value", array[i]);
			options.text(array[i]);
			$("#answers").append(options);
		};
	};

	function start() {
		timeRemaining = 15;
		$("#time").text("Time Remaining: " + timeRemaining  + " seconds");
		timer = setInterval(countdown, 1000);
        $(this).hide();
        currentQuestion++;
        if (currentQuestion === questions.length) {
			clearInterval(timer);
			$("#time").empty();
			$("#rightWrong").html("All done, here is how you did!");
			var newDiv = $("<div>");
			var corr = "Correct Answers: " + correct + "<br>";
			newDiv.append(corr);
			var incorr = "Incorrect Answers: " + incorrect + "<br>";
			newDiv.append(incorr);
			var unans = "Unanswered: " + unanswered + "<br>";
			newDiv.append(unans);
			$("#correctAnswer").html(newDiv);
			$("#img").empty();
			$("#startOver").show();
		} else {
	        $("#question").text(questions[currentQuestion].question);
	        displayAns(questions[currentQuestion].answers);
	        $("#correctAnswer").empty();
	        $("#rightWrong").empty();
	        $("#img").empty();
    	};
	};

	function startOver() {
		$("#rightWrong").empty();
		$("#correctAnswer").empty();
		$("#img").empty();
		currentQuestion = -1;
		console.log(currentQuestion)
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		$(this).hide();
		start();
	};

	$("#start").click(start);

	$("#startOver").click(startOver);

	$(document).on("click", ".options", function(){  
		clearInterval(timer);
		if ($(this).attr("data-value") === questions[currentQuestion].correct) {
			$("#question").empty();
			$("#answers").empty();
			$("#rightWrong").html("Correct!");
			answerImage.attr("src", questions[currentQuestion].image);
			$("#img").html(answerImage);
			correct++;
			setTimeout(start, 5000);
		} else if ($(this).attr("data-value") !== questions[currentQuestion].correct) {
			$("#question").empty();
			$("#answers").empty();
			$("#rightWrong").html("Nope!");
			$("#correctAnswer").html("The Correct Answer is " + questions[currentQuestion].correct);
			answerImage.attr("src", questions[currentQuestion].image);
			$("#img").html(answerImage);
			incorrect++;
			setTimeout(start, 5000);
		} ;
	});
});