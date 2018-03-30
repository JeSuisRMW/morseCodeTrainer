var input=[];
var output=[];
var alphabet = {  
   "-----":"0", ".----":"1", "..---":"2", "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7", "---..":"8",
   "----.":"9", ".-":"a", "-...":"b", "-.-.":"c", "-..":"d", ".":"e", "..-.":"f", "--.":"g", "....":"h", "..":"i", 
   ".---":"j", "-.-":"k", ".-..":"l", "--":"m", "-.":"n", "---":"o", ".--.":"p", "--.-":"q", ".-.":"r", "...":"s",
   "-":"t", "..-":"u", "...-":"v", ".--":"w", "-..-":"x", "-.--":"y", "--..":"z", "   ":" ", "-·-·--":"!",
   "·-·-·-":".", "--··--":","
};

document.getElementById("one").addEventListener("click", function(){
	writeOne();
	light();
})

document.getElementById("three").addEventListener("click", function(){
	writeThree();
	light();
})

document.getElementById("space").addEventListener("click", function(){
	writeSpace();
	light();
})

	

document.getElementById("submit").addEventListener("click", function(){
	translate();
	print();
	clear();
})

function writeOne(){
	input.push(".");
}

function writeThree(){
	input.push("-");
}


function writeSpace(){
	input.push(" ");
}

function clear(){
	input=[];
	output=[];
}

async function light(){
	 document.body.classList.toggle("light");
	 await sleep(300);
	 document.body.classList.toggle("light");
	 
}

function print(){
	document.getElementById("h1").innerHTML=output;
}

function translate(){
	input = input.join("");
	input.split("   ").map(function(word){
		word.split(" ").map(function(letter){
			output.push(alphabet[letter]);
		});
	});

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}