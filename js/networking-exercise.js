

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
		q:'_______ layer is the top layer of the TCP/IP reference model.',
		options:
		[
		'Application', 
		'Transport', 
		'Internet', 
		'Link'
		],
		answer: 0
	},
	{
		q:'_______ layer is the third layer in the TCP/IP reference model.',
		options:
		[
		'Application', 
		'Transport', 
		'Internet', 
		'Link'
		],
		answer: 1
	},
	{
		q:'_______ layer is the second lowest layer of the TCP/IP reference model.',
		options:
		[
		'Application', 
		'Transport', 
		'Internet', 
		'Link'
		],
		answer: 2
	},
	{
		q:'_______ layer is the first lowest layer of the TCP/IP reference model',
		options:
		[
		'Application', 
		'Transport', 
		'Internet', 
		'Link'
		],
		answer: 3
	},
	{
		q:'_______ layer is the seventh top layer in the OSI reference model',
		options:
		[
		'Application', 
		'Presentation', 
		'Session', 
		'Transport '
		],
		answer: 0
	},
	{
		q:'_______ layer is the sixth layer in the OSI reference model',
		options:
		[
		'Application', 
		'Presentation', 
		'Session', 
		'Transport '
		],
		answer: 1
	},
	{
		q:'_______ layer is the fifth layer in the OSI reference model',
		options:
		[
		'Application', 
		'Presentation', 
		'Session', 
		'Transport '
		],
		answer: 2
	},
	{
		q:'_______ layer is fourth and middle layer in the OSI reference model',
		options:
		[
		'Application', 
		'Presentation', 
		'Session', 
		'Transport '
		],
		answer: 3
	},
	{
		q:'_______ Layer is the third lowest layer in the OSI reference model.',
		options:
		[
		'Network', 
		'Data Link', 
		'Physical', 
		'Transport '
		],
		answer: 0
	},
	{
		q:'_______ layer is the second lowest layer in the OSI reference model.',
		options:
		[
		'Network', 
		'Data Link', 
		'Physical', 
		'Transport '
		],
		answer: 1
	},
	{
		q:'_______ layer is the first lowest layer in the OSI reference model.',
		options:
		[
		'Network', 
		'Data Link', 
		'Physical', 
		'Transport '
		],
		answer: 2
	},
	{
		q:'_______ is a network point that act as entry point to other network and translates one data format to another.',
		options:
		[
		'Gateway', 
		'Router', 
		'Bridge', 
		'Repeater'
		],
		answer: 0
	},
	{
		q:'_______ is internetwork connecting device that determines most efficient path for sending a data packet to any given network.',
		options:
		[
		'Gateway', 
		'Router', 
		'Bridge', 
		'Repeater'
		],
		answer: 1
	},
	{
		q:'_______ is a networking device that connects two or more LAN\'s together.',
		options:
		[
		'Gateway', 
		'Router', 
		'Bridge', 
		'Repeater'
		],
		answer: 2
	},
	{
		q:'_______ is a electronic device that reshapes and amplifies the signal received from one LAN segment to another.',
		options:
		[
		'Gateway', 
		'Router', 
		'Bridge', 
		'Repeater'
		],
		answer: 3
	},
	{
		q:'_______ is circuit board or a card that allows computers to communicate over a network via cables or wirelessly.',
		options:
		[
		'NIC', 
		'Switch', 
		'Hub', 
		'Modem'
		],
		answer: 0
	},
	{
		q:'_______ is a multiple LAN connecting device, which takes incoming data packet from any multiple input ports and passes the data packet to specific output port.',
		options:
		[
		'NIC', 
		'Switch', 
		'Hub', 
		'Modem'
		],
		answer: 1
	},
	{
		q:'_______ is a connecting device in which various types of cables are connected to centralize network traffic through a single connecting point.',
		options:
		[
		'NIC', 
		'Switch', 
		'Hub', 
		'Modem'
		],
		answer: 2
	},
	{
		q:'_______ is a device that converts digital signal to analog signal as a modulator and analog signal to digital signal as a demodulator.',
		options:
		[
		'NIC', 
		'Switch', 
		'Hub', 
		'Modem'
		],
		answer: 3
	},
	{
		q:'Whole capacity of the channel is reserved.',
		options:
		[
		'Multipoint-to-Multipoint', 
		'Multipoint-to-point', 
		'Point-to-Multipoint', 
		'Point-to-point'
		],
		answer: 3
	},
	{
		q:'Capacity of channel is shared spatially or temporarily.',
		options:
		[
		'Multipoint-to-Multipoint', 
		'Multipoint-to-point', 
		'Point-to-point',
		'Point-to-Multipoint'
		],
		answer: 3
	},
	{
		q:'Its a one-way communication, where data flows only in one direction from sender to receiver.',
		options:
		[
		'Simplex', 
		'Half-Duplex', 
		'Full-Duplex',
		'None of the above'
		],
		answer: 0
	},
	{
		q:'Its a two-way communication, data flows in both direction but sender and receiver can\'t transmit and receive at the same time.',
		options:
		[
		'Simplex', 
		'Half-Duplex', 
		'Full-Duplex',
		'None of the above'
		],
		answer: 1
	},
	{
		q:'Its a two-way communication, where both sender and receiver can trasmit and receive at the same time.',
		options:
		[
		'Simplex', 
		'Half-Duplex', 
		'Full-Duplex',
		'None of the above'
		],
		answer: 2
	},
	{
		q:'Its a three-way communication, where both sender and receiver can trasmit and receive at the same time.',
		options:
		[
		'Simplex', 
		'Half-Duplex', 
		'Full-Duplex',
		'None of the above'
		],
		answer: 3
	},
	{
		q:'Each node connected to each other forming a ring like structure.',
		options:
		[
		'Ring Topology', 
		'Bus Topology', 
		'Star Topology',
		'Tree Topology'
		],
		answer: 0
	},
	{
		q:'All devices such as server, node, printer are connected to common shared cable called as a bus.',
		options:
		[
		'Ring Topology', 
		'Bus Topology', 
		'Star Topology',
		'Tree Topology'
		],
		answer: 1
	},
	{
		q:'All nodes are connected to central hub.',
		options:
		[
		'Ring Topology', 
		'Bus Topology', 
		'Star Topology',
		'Tree Topology'
		],
		answer: 2
	},
	{
		q:'Central hub or root node is connected to other lower end nodes.',
		options:
		[
		'Ring Topology', 
		'Bus Topology', 
		'Star Topology',
		'Tree Topology'
		],
		answer: 3
	},
	{
		q:'Dedicated point-to-point link is established between nodes.',
		options:
		[
		'Ring Topology', 
		'Bus Topology', 
		'Star Topology',
		'Mesh Topology'
		],
		answer: 3
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

