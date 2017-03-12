


/*var score =0;
var playerChoice;

var readable={

'0': 'Rock',
'1': 'Paper',
'2': 'Scissors'

};

var cpuChoice= {

	init:function(){
		this.store=Math.floor(Math.random()*3);
		this.text=readable[this.store];
	},

	store: '',
	text: ''
};


var  order=[0,1,2,0];

var chooseWinner=function(player , cpu){

if (order[player]===order[cpu]){

	return 'This is a tie , try again?';
}

if (order[player]===order[cpu+1]){
     score++;
	return 'You won';
} else {
    score--;
	return'you loose';
}

}

//ui code
var paragraph =document.querySelector('p');

var assignClick= function(tag, pos){

	tag.addEventListner('click' , function(){

		playerChoice=pos;
		cpuChoice.init();
		paragraph.innerText='computer chose ' + cpuChoice.text;
		paragraph.innerText+='\n' +chooseWinner(playerChoice,cpuChoice.store);
		paragraph.innerText+= '\n' +'score : ' + score;
	})
}

var images ={

	tags : document.getElementsByTagName('img'),
	init: function(){

		for(var step=0;step<this.tags.length;step++){

			assignClick(this.tags[step],step);
		}
	}
}

images.init();
*/


var score=0;

var reason=function(choice1,choice2){

    if(choice1===choice2){
    	return "Because both are equal ";
    }

	else if ( (choice1==="scissors" && choice2==="paper") || (choice2==="scissors" && choice1==="paper")    ){
		return " Because Scissors cuts Paper ";
	}

	else if ((choice1==="paper" && choice2==="rock") || (choice2==="paper" && choice1==="rock") ) {
		return "Because Paper covers Rock";
	}

	else if ((choice1==="rock" && choice2==="lizard") || (choice2==="rock" && choice1==="lizard") ){
		return "Because Rock crushes Lizard";
	}

	else if ( (choice1==="lizard" && choice2==="spock") || (choice2==="lizard" && choice1==="spock") ){
		return "Because Lizard poisons Spock.";
	}

	else if ((choice1==="spock" && choice2==="scissors") ||(choice2==="spock" && choice1==="scissors")){
		return "Because Spock smashes Scissors.";
	}

	else if ((choice1==="scissors" && choice2==="lizard")|| (choice2==="scissors" && choice1==="lizard")){
		return "Because Scissors decapitates Lizard. ";
	}

	else if ((choice1==="lizard" && choice2==="paper") || (choice2==="lizard" && choice1==="paper") ){
		return "Because Lizard eats Paper";
	}

	else if ( (choice1==="paper" && choice2==="spock") || (choice2==="paper" && choice1==="spock") ){
		return "Because Paper disproves Spock";
	}

	else if ((choice1==="spock" && choice2==="rock")  || (choice2==="spock" && choice1==="rock") ){
		return "Because Spock vaporizes rock. ";
	}
    
    else if( (choice1==="rock" && choice2==="scissors") || (choice2==="rock" && choice1==="scissors") ){
		return "Because Rock crushes Scissors ";
	}



};

var compare= function (choice1 , choice2){


	if (choice1===choice2)
		return "Its a tie"
    
    if (choice1==="rock"){

         if (choice2 ==="paper" || choice2==="spock")
         	return "You loose";
         else
         	return "You win";

    
    }

    else if (choice1==="paper"){

         if (choice2 ==="scissors" || choice2==="lizard")
         	return "You loose";
         else
         	return "You win";


    }

    else if (choice1==="scissors"){

         if (choice2 ==="rock" || choice2==="spock")
         	return "You loose";
         else
         	return "You win";
    }

    else if (choice1==="lizard" ){

         if (choice2 ==="rock" || choice2==="scissors")
         	return "You loose";
         else
         	return "You win";
    }


    else if (choice1==="spock"){

         if (choice2 ==="paper" || choice2==="lizard")
         	return "You loose";
         else
         	return "You win";
    }
    

    };



document.getElementById('rock').addEventListener('click', function (e) {

	var userChoice= "rock"
	//var computerChoice = Math.random();
	var computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
} 

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose rock " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});


document.getElementById('paper').addEventListener('click', function (e) {
	
	var userChoice= "paper"
	var computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose paper " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);


});


document.getElementById('scissors').addEventListener('click', function (e) {
	
	var userChoice= "scissors"
	var computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose scissors " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

document.getElementById('lizard').addEventListener('click', function (e) {
	
	var userChoice= "lizard"
	var computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose lizard " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});

document.getElementById('spock').addEventListener('click', function (e) {
	
	var userChoice= "spock"
	var computerChoice = Math.random();
	//console.print(computerChoice);
if (computerChoice <=0.20) {
	computerChoice = "rock";
} else if(computerChoice <= 0.40) {
	computerChoice = "paper";
} else if(computerChoice <=0.60){
	computerChoice = "scissors";
} else if(computerChoice <=0.80){
	computerChoice = "lizard";
} else if(computerChoice <=1){
	computerChoice = "spock";
}

document.getElementById("p1").innerHTML = "computer chose " + computerChoice + " and you chose spock " ;
document.getElementById("p2").innerHTML = compare(userChoice,computerChoice);
document.getElementById('p2').style.cssText = 'background:#ffffff; color: #000000; padding: 8px; border-radius:15px;width:300px; margin:auto;';
document.getElementById("p3").innerHTML = reason(userChoice,computerChoice);

});