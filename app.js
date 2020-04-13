
let userScore = 0; 
let compScore  = 0;
let result_text = "";

const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

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

function convertID(choice){
    return choice == "p" ? "Paper": choice == "r" ? "Rock": "Scissor";
}
function win (user, comp){
    const userChoiceDiv = document.getElementById(user)
    userScore++ ;
    console.log("User Wins");
    
    userScore_span.innerText = userScore;
    compScore_span.innerText = compScore;

    // user = (user == "p" ? "Paper": user == "r" ? "Rock": "Scissor"); 
    // comp = (comp == "p" ? "Paper": comp == "r" ? "Rock": "Scissor"); 

    result_text = `${convertID(user)}${smallUserWord} covers   ${convertID(comp)}${smallCompWord} . You Win!` 
    result_div.innerHTML = result_text;
    userChoiceDiv.classList.add('green-glow');
    //console.log(document.getElementById(user));
    //console.log(user);
    setTimeout( function(){userChoiceDiv.classList.remove('green-glow')}, 1000);
}


function draw (user, comp){
    const userChoiceDiv = document.getElementById(user);
    console.log("Unentschieden");
    result_text =  `Oops, don't fight with the same weapons.   ${convertID(user)} and  ${convertID(comp)} is a Draw!`
    result_div.innerHTML = result_text;
    userChoiceDiv.classList.add('gray-glow');

    // ARRROW FUNCTION BEISPIEL
    //setTimeout( function(){userChoiceDiv.classList.remove('gray-glow')}, 1000);
    setTimeout( () =>  userChoiceDiv.classList.remove('gray-glow'), 1000);
}

function lose (user, comp){
    const userChoiceDiv = document.getElementById(user);
    compScore++ ;
    compScore_span.innerText = compScore;
    userScore_span.innerText = userScore;

    result_text = ` ${convertID(user)}${smallUserWord} can't defend ${convertID(comp)}${smallCompWord} . You Lose -.-` 
    result_div.innerHTML = result_text;
    //compScore_span.textContent(compScore);
    //console.log("User loses");

    userChoiceDiv.classList.add('red-glow');
    setTimeout( function(){userChoiceDiv.classList.remove('red-glow')}, 1000);
}


function main(){
    rock_div.addEventListener('click', function (){
        game("r")
        //console.log("hey you clicked on the rock");
    });
    
    paper_div.addEventListener('click', () => game("p"));   
    scissors_div.addEventListener('click', () => game("s"));
}

main();

