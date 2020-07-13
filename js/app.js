let user_score = 0;
let computer_score = 0;

const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('computer_score');

const result_div = document.querySelector('.result');
const scoreBoard_div = document.querySelector('.score-board');

const rock_div = document.getElementById('rock'); 
const paper_div = document.getElementById('paper'); 
const scissors_div = document.getElementById('scissors'); 

function convertWord(choice){
	if(choice === 'r')
		return 'Rock';
	if(choice === 'p')
		return 'Paper';
	return 'Scissors';
}

function win(userChoice, computerChoice){
	user_score++;
	userScore_span.innerHTML = user_score;
	computerScore_span.innerHTML = computer_score;
	result_div.innerHTML = `${convertWord(userChoice)} beats ${convertWord(computerChoice)}. You WIN!!`;
}

function loose(userChoice, computerChoice){
	computer_score++;
	userScore_span.innerHTML = user_score;
	computerScore_span.innerHTML = computer_score;
	result_div.innerHTML = `${convertWord(userChoice)} lost to ${convertWord(computerChoice)}. You LOOSE!!`;
}

function draw(userChoice, computerChoice){
	userScore_span.innerHTML = user_score;
	computerScore_span.innerHTML = computer_score;
	result_div.innerHTML = `${convertWord(userChoice)} draws with ${convertWord(computerChoice)}. You DRAW!!`;
}


function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	return choices[Math.floor(Math.random()*3)]
}

function game(userChoice){
	const computerChoice = getComputerChoice();

	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			loose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
	}
}

function main(){
rock_div.addEventListener('click', function(){
	game('r');
})

paper_div.addEventListener('click', function(){
	game('p');
})

scissors_div.addEventListener('click', function(){
	game('s');
})


}

main();