function println(text) {
    var ln = "<br>";
    document.write(text + ln);
}

var options = ["Rock", "Paper", "Scissors"];

function setOutcome(option) {
    var result = document.getElementById("players_choice");
    result.innerHTML = option;
    play(option);
}

function play(option) {
    var result = document.getElementById("computers_choice");
    var random = Math.floor(Math.random() * 3);
    var choice = options[random];
    switch(choice) {
        case 'Rock':
            result.innerHTML = 'Paper';
            break;
        case 'Paper':
            result.innerHTML = 'Scissors';
            break;
        case 'Scissors':
            result.innerHTML = 'Rock';
            break;
        default:
            result.innerHTML = choice + ': How did you even get here?';
    }
}

var buttons = [document.getElementById("rock"),
                document.getElementById("paper"),
                document.getElementById('scissors')];

buttons[0].addEventListener('click', setOutcome.bind(null, options[0]));
buttons[1].addEventListener('click', setOutcome.bind(null, options[1]));
buttons[2].addEventListener('click', setOutcome.bind(null, options[2]));

println("");