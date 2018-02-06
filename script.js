function println(text) {
    var ln = "<br>";
    document.write(text + ln);
}

var outcome = document.createElement("p");
var outcomeText = document.createTextNode("Result");
outcome.appendChild(outcomeText);
document.body.appendChild(outcome);

function setOutcome(result) {
    outcomeText.nodeValue = result;
}

var options = ["Rock", "Paper", "Scissors"];
var buttons = [];

for (var i = 0; i < options.length; i++) {
    buttons[i] = document.createElement("button");
    var textNode = document.createTextNode(options[i]);
    buttons[i].appendChild(textNode);
    document.body.appendChild(buttons[i]);
    buttons[i].addEventListener("click", 
        setOutcome.bind(null, options[i]));
}

println("");