

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


// QUESTIONS AND OPTIONS ANSWERS
const questions=
[
	{
		q:'A non-volatile storage device used to store digital data on magnetic surface of rigid plate by using read/write heads.',
		options:
		[
		'Hard Disk', 
		'Digital Video Disc', 
		'Compact Disc', 
		'Pen Drive'
		],
		answer: 0
	},
	{
		q:'A circular optical disc made up of thin platted glass and plastic polycarbonate material.',
		options:
		[
		'Hard Disk', 
		'Digital Video Disc', 
		'Compact Disc', 
		'Pen Drive'
		],
		answer: 2
	},
	{
		q:'Storing of data can be done on both side in a spiral way of valleys (pits) and plains (lands).',
		options:
		[
		'Hard Disk', 
		'Digital Video Disc', 
		'Compact Disc', 
		'Pen Drive'
		],
		answer: 1
	},
	{
		q:'A small pen size flash memory device integrated with USB interface offering easy, fast and reliable way for storing and transferring digital files.',
		options:
		[
		'Hard Disk', 
		'Digital Video Disc', 
		'Compact Disc', 
		'Pen Drive'
		],
		answer: 3
	},
	{
		q:'An electronic flash memory device offering an easy, fast and reliable way for storing and transferring digital data.',
		options:
		[
		'Hard Disk', 
		'Memory Card', 
		'Portable Hard Disk', 
		'Pen Drive'
		],
		answer: 1
	},
	{
		q:'A pocket size storage device, which is connected to the computer or a laptop via a USB cable.',
		options:
		[
		'Hard Disk', 
		'Memory Card', 
		'Portable Hard Disk', 
		'Pen Drive'
		],
		answer: 2
	},
	{
		q:'Translates electronic signals consisting of audio information from the computer into sounds that user can hear and understand it.',
		options:
		[
		'Monitors', 
		'Printers', 
		'Speakers', 
		'None of the Above'
		],
		answer: 2
	},
	{
		q:'Device that prints text and graphics in the same format and shape which is displayed on the screen connected via printer cable or USB cable.',
		options:
		[
		'Monitors', 
		'Printers', 
		'Speakers', 
		'None of the Above'
		],
		answer: 1
	},
	{
		q:'Most commonly used output device.',
		options:
		[
		'Monitors', 
		'Printers', 
		'Speakers', 
		'None of the Above'
		],
		answer: 0
	},
	{
		q:'A pointing control device consisting of spherical ball, having some portion projecting above the surface.',
		options:
		[
		'Keyboard', 
		'Mouse', 
		'Touch Screen', 
		'Trackball and Joystick'
		],
		answer: 3
	},
	{
		q:'A display that can detect the touch such as finger or stylus. Touch screen are easy to use, especially when user need information quickly.',
		options:
		[
		'Keyboard', 
		'Mouse', 
		'Touch Screen', 
		'Trackball and Joystick'
		],
		answer: 2
	},
	{
		q:'Controls a pointer that is displayed on the monitor.',
		options:
		[
		'Keyboard', 
		'Mouse', 
		'Touch Screen', 
		'Trackball and Joystick'
		],
		answer: 1
	},
	{
		q:'Commonly used input device to enter text.',
		options:
		[
		'Keyboard', 
		'Mouse', 
		'Touch Screen', 
		'Trackball and Joystick'
		],
		answer: 0
	},
	{
		q:'Device use to convert sound waves into electrical signals.',
		options:
		[
		'Microphone', 
		'Webcam', 
		'Scanning Devices', 
		'Bar Code Reader'
		],
		answer: 0
	},
	{
		q:'A digital video camera that captures and records, real time images and videos connected via USB or Firewire port.',
		options:
		[
		'Microphone', 
		'Webcam', 
		'Scanning Devices', 
		'Bar Code Reader'
		],
		answer: 1
	},
	{
		q:'Device used to scan text documents, images, objects and convert it into digital image.',
		options:
		[
		'Microphone', 
		'Webcam', 
		'Scanning Devices', 
		'Bar Code Reader'
		],
		answer: 2
	},
	{
		q:'An electronic device used for reading printed bar codes.',
		options:
		[
		'Microphone', 
		'Webcam', 
		'Scanning Devices', 
		'Bar Code Reader'
		],
		answer: 3
	},
	{
		q:'Are scanners that are able to recognize special characters and marks. Essentially used for certain applications.',
		options:
		[
		'Microphone', 
		'Webcam', 
		'Scanning Devices', 
		'Recognition Devices'
		],
		answer: 3
	},
	{
		q:'Is a disk drive which uses optical-disc technology to read and write discs.',
		options:
		[
		'Optical Disk Drive', 
		'Bus Lines', 
		'Slots and Cards', 
		'Cables'
		],
		answer: 0
	},
	{
		q:'Printed metal traceses on the motherboard or circuit board called as bus lines.',
		options:
		[
		'Optical Disk Drive', 
		'Bus Lines', 
		'Slots and Cards', 
		'Cables'
		],
		answer: 1
	},
	{
		q:'Placed inside the cabinet on motherboard.',
		options:
		[
		'Optical Disk Drive', 
		'Bus Lines', 
		'Slots and Cards', 
		'Cables'
		],
		answer: 2
	},
	{
		q:'Consists of one, two or more wires which connects input and output devices to the system via ports and connectors.',
		options:
		[
		'Optical Disk Drive', 
		'Bus Lines', 
		'Slots and Cards', 
		'Cables'
		],
		answer: 3
	},
	{
		q:'Are interface used for linking devices by cables.',
		options:
		[
		'Connectors', 
		'Ports', 
		'ROM', 
		'RAM'
		],
		answer: 0
	},
	{
		q:'Are connecting sockets, used to connect peripheral devices on the system unit.',
		options:
		[
		'Connectors', 
		'Ports', 
		'ROM', 
		'RAM'
		],
		answer: 1
	},
	{
		q:'A memory storage device, whose contents can be read and accessed but cannot be modified.',
		options:
		[
		'Connectors', 
		'Ports', 
		'ROM', 
		'RAM'
		],
		answer: 2
	},
	{
		q:'A small scale size IC\'s memory chip used to store and access data in any order (i.e. in random order).',
		options:
		[
		'Connectors', 
		'Ports', 
		'ROM', 
		'RAM'
		],
		answer: 3
	},
	{
		q:'A small or large circuit board inside a cabinet containing most of the electronic components.',
		options:
		[
		'Motherboard', 
		'Ports', 
		'ROM', 
		'RAM'
		],
		answer: 0
	},	
	{
		q:'It\'s a microprocessor chip developed by Intel, AMD or any other company.',
		options:
		[
		'Motherboard', 
		'CPU', 
		'ROM', 
		'RAM'
		],
		answer: 1
	},
	{
		q:'Computers were using Vacuum tubes (Valves) as an electronic component.',
		options:
		[
		'Second Generation (1956)', 
		'First Generation (Mid 1940\'s)', 
		'Fourth Generation (1971 and present)', 
		'Third Generation (1964)'
		],
		answer: 1
	},
	{
		q:'Integrated Circuits(IC\'s) made up of small crystal of silicon semiconductor were used.',
		options:
		[
		'Second Generation (1956)', 
		'First Generation (Mid 1940\'s)', 
		'Fourth Generation (1971 and present)', 
		'Third Generation (1964)'
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

