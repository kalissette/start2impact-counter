function addButtons() {
    let sumButton = creationButton('+', increaseOperation());
    let differenceButton = creationButton('-', decreaseOperation());
    differenceButton.classList.add("delay");

    let buttons = document.getElementById('buttons');
    buttons.appendChild(sumButton);
    buttons.appendChild(differenceButton);
}


function creationButton(value, functionName) {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("bouncy");
    button.innerHTML = value;
    button.addEventListener("click", functionName);
    return button;
}