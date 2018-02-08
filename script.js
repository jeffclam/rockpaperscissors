function println(text) {
    var ln = "<br>";
    document.write(text + ln);
}

var options = ["Rock", "Paper", "Scissors"];

function setOutcome(players_choice) {
    var result = document.getElementById("players_choice");
    result.innerHTML = players_choice;
    play(players_choice);
}

const outcome = {
    WIN : 'win',
    LOSE : 'lose',
    DRAW : 'draw'
};

function react(outcome) {
    var pic = document.getElementById('pic');
    var intro = document.getElementById("intro");
    switch(outcome) {
        case 'lose':
            intro.innerHTML = 'I win! Let\'s play again!';
            pic.src = './resources/win.jpg';
            break;
        case 'win':
            intro.innerHTML = 'I lost... Let\'s play again!';
            pic.src = './resources/lose.jpg';
            break;
        case 'draw':
            intro.innerHTML = 'It\'s a draw... Let\'s play again!';
            pic.src = './resources/draw.jpg';
            break;
        default:
            pic.src = './resources/lets_play.jpg';
    }
}

function play(players_choice) {
    var result = document.getElementById("computers_choice");
    var random = Math.floor(Math.random() * 3);
    var computers_choice = options[random];
    result.innerHTML = options[random];
    calculateResults(players_choice, computers_choice);
}

function calculateResults(players_choice, computers_choice) {
    if (players_choice === computers_choice) {
        react(outcome.DRAW);
    } else {
        if (players_choice === "Rock") {
            if (computers_choice === "Paper") {
                react(outcome.LOSE);
            } else {
                react(outcome.WIN);
            }
        } else if (players_choice === "Paper") {
            if (computers_choice === "Scissors") {
                react(outcome.LOSE);
            } else {
                react(outcome.WIN);
            }
        } else if (players_choice === "Scissors") {
            if (computers_choice === "Rock") {
                react(outcome.LOSE);
            } else {
                react(outcome.WIN);
            }
        }
    }
}

var buttons = [document.getElementById("rock"),
                document.getElementById("paper"),
                document.getElementById('scissors')];

buttons[0].addEventListener('click', setOutcome.bind(null, options[0]));
buttons[1].addEventListener('click', setOutcome.bind(null, options[1]));
buttons[2].addEventListener('click', setOutcome.bind(null, options[2]));