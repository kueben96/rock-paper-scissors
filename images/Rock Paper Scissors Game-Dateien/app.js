
let userScore = 0; 
let compScore  = 0;
let result_text = "";

// dom - variales
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoices(){
    const choices = ['r', 's', 'p'];
    const randomNo = Math.floor(Math.random()*3);
    return choices[randomNo];
}

function game (userChoice){
    const computerChoice = getComputerChoices();
   // console.log("Computer Choice:      "  + computerChoice);
    //console.log("Chosen sign:          " + userChoice);
    // idee: array mit Kombi wenn user gewinnt
    // const userWinCombi = ['sp', ... ]
    // aber dann würde vllt switch nicht gehen sondern mehr if(res is in userwincombi ) dann intereate userScore
    // array mit Kombi wenn Comp gewinnt

    switch (userChoice + computerChoice){
        case ("rr"):
        case ("ss"):
        case ("ss"):
            draw(userChoice, computerChoice)
            break;
        case "rs" :
        case "sp" :
        case "pr" :
            win(userChoice, computerChoice);
            break;
        case "sp": 
        case "sr":
        case "rp":
            lose(userChoice, computerChoice)
            break;
    }
}

function win (user, comp){
    userScore++ ;
    console.log("User Wins");
    
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;
    
    user = (user == "p" ? "Paper": user == "r" ? "Rock": "Scissor"); 
    comp = (comp == "p" ? "Paper": comp == "r" ? "Rock": "Scissor"); 
    result_text = user+ " covers " + comp + ". You Win!" 
    result_div.innerHTML = result_text;

}

function draw (user, comp){
    console.log("Unentschieden");
}

function lose (user, comp){
    compScore++ ;
    compScore_span.innerText = compScore;
    userScore_span.innerText = userScore;
    //compScore_span.textContent(compScore);
    console.log("User loses");
}


function main(){
    rock_div.addEventListener('click', function (){
        game("r")
        //console.log("hey you clicked on the rock");
    });
    
    paper_div.addEventListener('click', function (){
        game("p")
        //console.log("hey you clicked on the paper");
    });
    
    scissors_div.addEventListener('click', function (){
        game("s");
        //console.log("hey you clicked on the scissors");
    });
}

main();

