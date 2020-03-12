

const questionsTrackerContainer = document.querySelector(".questions-tracker");
const percentage = document.querySelector(".percentage");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const correctAnswerSpan = document.querySelector(".correct-answers");
const answerTrackerContainer = document.querySelector(".answers-tracker");
const options = document.querySelector(".options").children;
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question")
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let myArray = [];
let score = 0;

// CHange the bg color of the li elements


// QUESTIONS AND OPTIONS ANSWERS
const questions=
[
	{
		q:'________ is a name given to memory location for storing a value and its value may vary during program execution.',
		options:
		[
		'Constant', 
		'Variable', 
		'Keyword', 
		'Namespace'
		],
		answer: 1
	},
	{
		q:'________ is a number or a character representing a quantity, assumed to have fixed value.',
		options:
		[
		'Constant', 
		'Variable', 
		'Keyword', 
		'Namespace'
		],
		answer: 0
	},
	{
		q:'_________ is classification of a particular type of data like integer, float, character, boolean etc.',
		options:
		[
		'Namespace', 
		'Keyword', 
		'Variable', 
		'Data type'
		],
		answer: 3
	},
	{
		q:"What data type is this? (char value = 'a';)",
		options:
		[
		'Character type', 
		'Integer type', 
		'Float type', 
		'Double type' 
		],
		answer: 0
	},
	{
		q:"What data type is this? (int a = 2;)",
		options:
		[
		'Character type', 
		'Integer type', 
		'Float type', 
		'Double type' 
		],
		answer: 1
	},
	{
		q:"What data type is this? (float percentage = 49.21;)",
		options:
		[
		'Character type', 
		'Integer type', 
		'Float type', 
		'Double type' 
		],
		answer: 2
	},
	{
		q:"What data type is this? (double speed_rate = 1349.213235644;)",
		options:
		[
		'Character type', 
		'Integer type', 
		'Float type', 
		'Double type' 
		],
		answer: 3
	},
	{
		q:"What data type is this? (void main())",
		options:
		[
		'Character type', 
		'String type', 
		'Void type', 
		'None of the Above' 
		],
		answer: 2
	},
	{
		q:'______ stands for "print formated" is an built-in function defined in stdio.h header file that prints the output on the screen supplied with proper formated string.',
		options:
		[
		'Printf', 
		'Scanf', 
		'Printing', 
		'Comments' 
		],
		answer: 0
	},
	{
		q:'______ stands for "scan formatted" is an built-in function defined in stdio.h header file that scans the input entered by the user and stores into the variable specified.',
		options:
		[
		'Printf', 
		'Scanf', 
		'Printing', 
		'Comments' 
		],
		answer: 1
	},
	{
		q:'______ is a statement of one or more lines written by the programmer to understand himself and others, what the code is all about.',
		options:
		[
		'Printf', 
		'Scanf', 
		'Printing', 
		'Comments' 
		],
		answer: 3
	},
	{
		q:'______ statement executes a block of statements repeatedly for fixed number of times. It is used when the user knows how many times you want to execute the code.',
		options:
		[
		'Do while loop', 
		'For loop', 
		'While Loop', 
		'Switch Case' 
		],
		answer: 1
	},
	{
		q:'______ statement is used when programmer doesn\'t knows how many times the code will be executing before starting the loop, as it depends upon the users input.',
		options:
		[
		'Do while loop', 
		'For loop', 
		'While Loop', 
		'Switch Case' 
		],
		answer: 2
	},
	{
		q:'______ statement is used when user wants to execute the loop block at least once, no matter what initial condition of test expression is',
		options:
		[
		'Do while loop', 
		'For loop', 
		'While Loop', 
		'Switch Case' 
		],
		answer: 0
	},
	{
		q:'______ statement is used when user has multiple alternative of codes to choose, depending upon the value of single variable.',
		options:
		[
		'Do while loop', 
		'For loop', 
		'While Loop', 
		'Switch Case' 
		],
		answer: 3
	},
	{
		q:'______ statement terminates the current execution of loop(block) like while, do-while, for loop etc. and passes the execution control to the next statement after the loop.',
		options:
		[
		'Break', 
		'GoTo', 
		'Continue', 
		'Switch Case' 
		],
		answer: 0
	},
	{
		q:'______ statement is used when user wants to go back again to the start of that loop code, becuase of unexpected input entered by the user, program failure or any other purpose.',
		options:
		[
		'Break', 
		'GoTo', 
		'Continue', 
		'Switch Case' 
		],
		answer: 2
	},
	{
		q:'______ statement is mainly used when program becomes large and unreadable for the user. And also to pass the control from one location of the program to another.',
		options:
		[
		'Break', 
		'GoTo', 
		'Continue', 
		'Switch Case' 
		],
		answer: 1
	},
	{
		q:'These operators work on data types like integer, float and double.',
		options:
		[
		'Assignment Operators', 
		'Relational Operators', 
		'Logical Operators', 
		'Arithmetic Operators' 
		],
		answer: 3
	},
	{
		q:'______ operators allows us to compare the values of one to another, where both the values should be of same type i.e. arithmetic or string.',
		options:
		[
		'Assignment Operators', 
		'Relational Operators', 
		'Logical Operators', 
		'Arithmetic Operators' 
		],
		answer: 1
	},
	{
		q:'______ operators is equal represented by symbol \'=\', which assigns or changes the value of left operand to its right operand or expression.',
		options:
		[
		'Assignment Operators', 
		'Relational Operators', 
		'Logical Operators', 
		'Arithmetic Operators' 
		],
		answer: 0
	},
	{
		q:'______ operators allows you to logically combine boolean (true/false) values of two or more regular expressions.',
		options:
		[
		'Assignment Operators', 
		'Relational Operators', 
		'Logical Operators', 
		'Arithmetic Operators' 
		],
		answer: 2
	},
	{
		q:'______ operators allows you to calculate the result at the bit level of a given integer number or a character value.',
		options:
		[
		'Increment & Decrement Operators', 
		'Bitwise Operators', 
		'Shift Operators', 
		'Ternary Operators' 
		],
		answer: 1
	},
	{
		q:'______ operators shifts the binary bit value of a given number to left or right side.',
		options:
		[
		'Increment & Decrement Operators', 
		'Bitwise Operators', 
		'Shift Operators', 
		'Ternary Operators' 
		],
		answer: 2
	},
	{
		q:'______ operators shifts the binary bit value of a given number to left or right side.',
		options:
		[
		'Increment & Decrement Operators', 
		'Bitwise Operators', 
		'Shift Operators', 
		'Ternary Operators' 
		],
		answer: 0
	},
	{
		q:'______ operator handles three arguments where first argument is condition, depending upon on that condition it evalutes first or second expression.',
		options:
		[
		'Increment & Decrement Operators', 
		'Bitwise Operators', 
		'Shift Operators', 
		'Ternary Operators' 
		],
		answer: 3
	},
	{
		q:'A function which calls itself is called as recursive function.',
		options:
		[
		'Recursive Function', 
		'Loop Function', 
		'GoTo Function', 
		'None of the Above' 
		],
		answer: 0
	},
	{
		q:'Passing actual address of variables from the caller funtion to the function definition is called as _________.',
		options:
		[
		'Call by Value', 
		'Call by Reference', 
		'Call by Function', 
		'Call by Variable' 
		],
		answer: 1
	},
	{
		q:'When we pass value of a variable as an argument from the caller function to the function definition, it is called as _________.',
		options:
		[
		'Call by Value', 
		'Call by Reference', 
		'Call by Function', 
		'Call by Variable' 
		],
		answer: 0
	},
	{
		q:'_______ is a block of code that performs a specific task.',
		options:
		[
		'Operators', 
		'Class', 
		'Function', 
		'None of the Above' 
		],
		answer: 2
	}
]

totalQuestionSpan.innerHTML = questions.length;

function load(){
	questionNumberSpan.innerHTML = index + 1;
	question.innerHTML = questions[questionIndex].q;
	op1.innerHTML = questions[questionIndex].options[0];
	op2.innerHTML = questions[questionIndex].options[1];
	op3.innerHTML = questions[questionIndex].options[2];
	op4.innerHTML = questions[questionIndex].options[3];
	index++;
}

function check(element){
	if(element.id == questions[questionIndex].answer){
		element.classList.add("correct");
		updateAnswerTracker("correct");
		score++;
	}
	else{
		element.classList.add("wrong");
		updateAnswerTracker("wrong");
	}
	disabledOptions();
}

function disabledOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.add("disabled");
		if(options[i].id == questions[questionIndex].answer){
			options[i].classList.add("correct");
		}
	}
}

function enableOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.remove("disabled", "correct", "wrong");
	}
}

function validate(){
	if(!options[0].classList.contains("disabled")){
		alert("Please Select an answer first");
	} else {
		enableOptions();
		randomQuestion();
	}
}

function next(){
	validate();
}

function randomQuestion(){ 
	console.log("Index = " + index);
	if(index == questions.length-1){
		document.querySelector('#nextBtn').innerHTML = 'Submit';
	}
	let x = document.getElementById("ul-change-color").querySelectorAll("li");
	if (index < questions.length){
		if(index <= questions.length-1){
			for(let i=0; i<index; i++){
				x[i].style.backgroundColor = "rgb(99, 125, 152)";
			}
			x[index].style.backgroundColor = "rgb(7, 59, 111)";
		}
	}
	let randomNumber = Math.floor(Math.random()*questions.length);
	let hitDuplicate = 0;
	if(index == questions.length){
		quizOver();
	} else {
		if(myArray.length > 0){
			for(let i=0; i<myArray.length; i++){
				if(myArray[i] == randomNumber){
					hitDuplicate = 1;
					break;
				}
			}
			if(hitDuplicate == 1){
				randomQuestion();
			} else {
				questionIndex = randomNumber;
				load();
			}
		}
		if(myArray.length == 0){
			questionIndex = randomNumber;
			load();
		}
	}
	myArray.push(questionIndex);
}

function answerTracker(){
	for(let i=0; i<questions.length; i++){
		const div = document.createElement("div");
		answerTrackerContainer.appendChild(div);
	}
}

function updateAnswerTracker(classNam){
	answerTrackerContainer.children[index-1].classList.add(classNam);

}

function quizOver(){
	document.querySelector(".quiz-over").classList.add("show");
	correctAnswerSpan.innerHTML = score;
	totalQuestionSpan2.innerHTML = questions.length;
	var num = (score/questions.length)*100;
	var n = num.toFixed(2);
	percentage.innerHTML = n + "%";
}

function tryAgain(){
	window.location.reload();
}

function questionsTracker(){
	for(let i=0; i<questions.length; i++){
		let node = document.createElement("li");
		let textNode = document.createTextNode("Question " + (i+1));
		node.className = 'li-bgcolor';
		node.appendChild(textNode);
		questionsTrackerContainer.appendChild(node);
	}
}

function startQuiz(){
	document.querySelector(".message").classList.add("hide");
}





window.onload=function(){
	questionsTracker();
	randomQuestion();
	answerTracker();
}

