var message = document.getElementById("message");
var title = document.getElementById("colorDisplay");
var banner = document.querySelector("h1");
var reset = document.getElementById("reset");
reset.addEventListener("click", Refresh);

//function to randomize color display
function randomize () {
	var a = 256 * Math.random();
	a = Math.floor(a);
	var b = 256 * Math.random();
	b = Math.floor(b);
	var c = 256 * Math.random();
	c = Math.floor(c);

	return "rgb(" +a+ ", " +b+ ", " +c+ ")"; 

}

var numOfSquares = 6;
var squares = document.querySelectorAll(".square");
var ClrArr = [];
function SetRainbowArray() {
	for (var i=0; i<squares.length; i++) {
		ClrArr.push(randomize());
	}


	for (var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = ClrArr[i];
	}
	if (numOfSquares === 6) {
		title.textContent = ClrArr[Math.floor(6 * Math.random()) ]
	}
	else {
		title.textContent = ClrArr[Math.floor(3 * Math.random()) ]
	}
}

//dom manipulation to click a square and check if its equal to the color display



for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === title.textContent) {
			message.textContent = "correct!";
			SameColor();
			reset.textContent = "Ok so do it again..."
			
		}
		else {
			message.textContent = "try again";
			this.style.backgroundColor = "#232323";
			
		}
	});
}
Refresh();


function SameColor() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = title.textContent 
	};

	banner.style.backgroundColor = title.textContent;
}

function Refresh() {
	ClrArr = [];
 	for (var i=0; i<squares.length; i++) {
		ClrArr.push(randomize());
	}
	for (var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = ClrArr[i];
	}
	title.textContent = ClrArr[Math.floor(6 * Math.random()) ]
	message.textContent = ""
	banner.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors"
}



var staples = document.getElementsByClassName("mode");
staples[0].addEventListener("click", easyButton);
function easyButton() {
	numOfSquares = 3;
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.add("hidden");
	}
	
	staples[1].classList.remove("selected");
	staples[0].classList.add("selected");
	
	Refresh();
	SetRainbowArray();
	randomize();
}

var staples = document.getElementsByClassName("mode");
staples[1].addEventListener("click", HardButton);
function HardButton() {
	numOfSquares = 6;
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.remove("hidden");

	}
	
	staples[0].classList.remove("selected");
	staples[1].classList.add("selected");
	
	Refresh();
	SetRainbowArray();
	randomize();
}




