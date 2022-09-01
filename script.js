let computer, results; //choice
let compScore = 0, playScore = 0; //individual scores
let button = document.querySelectorAll('.user');
let enemyText = document.querySelector('.enemy');
let text = document.querySelector('.result');
let score = document.querySelector('.score');

button.forEach(button => button.addEventListener('click', function(){
    switch(Number(this.value)){
        case 1:
            console.log(1);
            startGame('paper');
            checkScore();
            break;
        case 2:
            console.log(2);
            startGame('scissors');
            checkScore();
            break;
        default:
            startGame('rock');
            checkScore();
            console.log(3);
    }
}))

function startGame(newInput){
    getComputerChoice();
    winDecider(newInput, computer);
    enemyText.textContent = `💻:The enemy's choice is ${computer}`;
    enemyText.classList.remove('animation');
    text.innerHTML += `${results}<br>`;
    score.textContent = `${compScore}-${playScore}`;
}

function checkScore(){
    if(compScore == 5 || playScore == 5){
        enemyText.textContent = "time out bruh😴"
        enemyText.classList.add('lose-animation')
        if(compScore == 5){
            text.textContent = 'you lose';
        }
        else{
            text.textContent = 'you win';
        }
        button.forEach(button => button.disabled = true)
    }
}

function getComputerChoice() {
    let decider = random(3);
    switch (decider){
        case 0:
            computer = 'rock';
            break;
        case 1:
            computer = 'scissors';
            break;
        default:
            computer = 'paper';
    }
}

function random(number) { //returns number from 0-('number'-1)
    return Math.floor(Math.random()*number);
}

function winDecider(players, computers){
    switch(players){
        case 'rock':
            switch (computers){
                case 'rock':
                    results = "it's a tie🥱";
                    break;
                case 'paper':
                    results = "lol take this L😹";
                    ++compScore;
                    break;
                case 'scissors':
                    results = "damn, W king🥶";
                    ++playScore;
            }
            break;
        case 'paper':
            switch (computers){
                case 'rock':
                    results = "damn, W king🥶";
                    ++playScore;
                    break;
                case 'paper':
                    results = "it's a tie🥱";
                    break;
                case 'scissors':
                    results = "lol take this L😹";
                    ++compScore;
            }
            break;
        case 'scissors':
            switch (computers){
                case 'rock':
                    results = "lol take this L😹";
                    ++compScore;
                    break;
                case 'paper':
                    results = "damn, W king🥶";
                    ++playScore;
                    break;
                case 'scissors':
                    results = "it's a tie🥱";
            }
            break;
        default:
            results ='invalid input🤡.';
            enemyText.textContent = `💻(:o)`;
    }
}
