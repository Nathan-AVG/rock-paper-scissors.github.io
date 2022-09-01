let computer, results;
let button = document.querySelectorAll('.user');
let enemyText = document.querySelector('.enemy');
let text = document.querySelector('.result');

button.forEach(button => button.addEventListener('click', function(){
    switch(Number(this.value)){
        case 1:
            console.log(1);
            startGame('paper');
            break;
        case 2:
            console.log(2);
            startGame('scissors');
            break;
        default:
            startGame('rock');
            console.log(3);
    }
}))


function startGame(newInput){
    getComputerChoice();
    winDecider(newInput, computer);
    enemyText.textContent = `💻:The enemy's choice is ${computer}`;
    text.textContent = results;
    setTimeout(function(){
        enemyText.textContent = "💻:The Enemy's thinking...";
    }, 2000);
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
                    break;
                case 'scissors':
                    results = "damn, W king🥶";
            }
            break;
        case 'paper':
            switch (computers){
                case 'rock':
                    results = "damn, W king🥶";
                    break;
                case 'paper':
                    results = "it's a tie🥱";
                    break;
                case 'scissors':
                    results = "lol take this L😹";
            }
            break;
        case 'scissors':
            switch (computers){
                case 'rock':
                    results = "lol take this L😹";
                    break;
                case 'paper':
                    results = "damn, W king🥶";
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
