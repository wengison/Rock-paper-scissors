const rpcIcons = document.querySelectorAll('#rps-icon');
const resetButton = document.querySelector('.reset-btn');

let player = document.querySelector('#playerOne');
let computer = document.querySelector('#computer');


const options = [
    {name: 'rock', url: 'images/rock.png'},
    {name: 'paper', url: 'images/paper.png'},
    {name: 'scissors', url: 'images/scissors.png'}
]


class Game {
    consturctor(_icon, _color) {
        this.icon = _icon;
        this.color = _color;    
    }

    choose() {
        let myIcon = this.icon
        console.log(myIcon)
    }
}

// console.log(newGame)

rpcIcons.forEach((icon)=> icon.addEventListener('click', ()=> {
    let iconos = icon.src;
    // let newGame = new Game(iconos, 'red');
    // newGame.choose(iconos);
    let random = Math.floor(Math.random()*3)
    player.style.background = `url(${iconos})`;
    computer.style.background = `url(${options[random].url})`;
    let playerB = player.style.background;
    let computerB = computer.style.background;
    checkScore(playerB, computerB);
}))

let rock = 'rgba(0, 0, 0, 0) url("file:///C:/Users/vengi/.vscode/A-JS-2022/unor/2/images/rock.png") repeat scroll 0% 0%';
let paper = 'rgba(0, 0, 0, 0) url("file:///C:/Users/vengi/.vscode/A-JS-2022/unor/2/images/paper.png") repeat scroll 0% 0%';
let scissors = 'rgba(0, 0, 0, 0) url("file:///C:/Users/vengi/.vscode/A-JS-2022/unor/2/images/scissors.png") repeat scroll 0% 0%';

let rockB = 'rgba(0, 0, 0, 0) url("images/rock.png") repeat scroll 0% 0%';
let paperB = 'rgba(0, 0, 0, 0) url("images/paper.png") repeat scroll 0% 0%';
let scissorsB = 'rgba(0, 0, 0, 0) url("images/scissors.png") repeat scroll 0% 0%';

let score1 = document.querySelector('#score1');
let score2 = document.querySelector('#score2');

let myScore1 = 0;
let myScore2 = 0;

function checkScore(player, computer) {

    function calc() {
        score1.innerHTML = 'Player: ' +myScore1;
        score2.innerHTML = 'Computer: '+myScore2;
    }
    //rock option
    if (player===rock & computer===rockB) {
        myScore1 +=0;
        myScore2 +=0;
        calc();
    } else if (player===rock & computer===paperB) {
        myScore1 +=0;
        myScore2 +=1;
        calc();
    } else if (player===rock & computer===scissorsB) {
        myScore1 +=1;
        myScore2 +=0;
        calc();
    }

    //paper option
    else if (player===paper & computer===rockB){
        myScore1 += 1;
        myScore2 += 0;
        calc();
    }
    else if (player===paper & computer===paperB){
        myScore1 += 0;
        myScore2 += 0;
        calc();
    }
    else if (player===paper & computer===scissorsB){
        myScore1 += 0;
        myScore2 += 1;
        calc();
    }

    //scissors option
    else if (player===scissors & computer===rockB){
        myScore1 += 0;
        myScore2 += 1;
        calc();
    }
    else if (player===scissors & computer===paperB){
        myScore1 += 1;
        myScore2 += 0;
        calc();
    }
    else if (player===scissors & computer===scissorsB){
        myScore1 += 0;
        myScore2 += 0;
        calc();
    }

    // switch (player, computer) {
    //     //rock
    //             case(player===rock, computer===rockB): 
    //                 score1 += 1;
    //                 score2 += 1;
    //                 console.log('you choose rock')
    //                 break;
    //             case(player===rock, computer===paperB):
    //                 score1 += 0;
    //                 score2 += 1;
    //                 console.log('you choose rock')
    //                 break;
    //             case(player===rock, computer===scissorsB):
    //                 score1 += 1;
    //                 score2 += 0;
    //                 console.log('you choose rock')
    //                 break;
    //     //paper
    //             case(player===paper, computer===rockB):
    //                 score1 += 1;
    //                 score2 += 0;
    //                 break;
    //             case(player===paper, computer===paperB):
    //                 score1 += 1;
    //                 score2 += 1;
    //                 break;
    //             case(player===paper, computer===scissorsB):
    //                 score1 += 0;
    //                 score2 += 1;
    //                 break;
    //     //scissors
    //             case(scissors, rock):
    //                 score1 += 0;
    //                 score2 += 1;
    //                 break;
    //             case(scissors, paper):
    //                 score1 += 1;
    //                 score2 += 0;
    //                 break;
    //             case(scissors, scissors):
    //                 score1 += 1;
    //                 score2 += 1;
    //         }
}

function reset () {
    myScore1 = 0;
    myScore2 = 0;
    score1.innerHTML = 'Player: 0';
    score2.innerHTML = 'Computer: 0';
}

resetButton.addEventListener('click', reset);