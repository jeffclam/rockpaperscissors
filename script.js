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

function play(players_choice) {
    var result = document.getElementById("computers_choice");
    var random = Math.floor(Math.random() * 3);
    var computers_choice = options[random];
    result.innerHTML = options[random];
    calculateResults(players_choice, computers_choice);
}

function calculateResults(players_choice, computers_choice) {
    var intro = document.getElementById("intro");
    if (players_choice === computers_choice) {
        intro.innerHTML = 'It\'s a draw... Let\'s play again!';
    } else {
        if (players_choice === "Rock") {
            if (computers_choice === "Paper") {
                intro.innerHTML = 'I win! Let\'s play again!';
            } else {
                intro.innerHTML = 'I lost... Let me beat you!';
            }
        } else if (players_choice === "Paper") {
            if (computers_choice === "Scissors") {
                intro.innerHTML = 'I win! Let\'s play again!';
            } else {
                intro.innerHTML = 'I lost... Let me beat you!';
            }
        } else if (players_choice === "Scissors") {
            if (computers_choice === "Rock") {
                intro.innerHTML = 'I win! Let\'s play again!';
            } else {
                intro.innerHTML = 'I lost... Let me beat you!';
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