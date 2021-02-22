function loadElements() {

    let h1 = createTextElement("Counter", "h1");
    document.body.appendChild(h1);

    let divWrapper = createElement("div");
    divWrapper.classList.add("flex-center");
    divWrapper.classList.add("flex-column");

    let div1 = createElement("div");
    div1.classList.add("counter");
    div1.setAttribute("id", "counter");
    div1.innerHTML = 0;

    let div2 = createElement("div");
    div2.classList.add("buttons-group");
    div2.setAttribute("id", "buttons");

    let sumButton = creationButton('+');
    sumButton.classList.add("btn");
    sumButton.classList.add("bouncy");
    
    let differenceButton = creationButton('-');
    differenceButton.classList.add("btn");
    differenceButton.classList.add("bouncy");
    differenceButton.classList.add("delay");

    div2.appendChild(sumButton);
    div2.appendChild(differenceButton);

    let div3 = createElement("div");
    div3.classList.add("buttons-group");
    div3.setAttribute("id", "reset");

    let resetButton = creationButton('Reset Counter');
    resetButton.classList.add("btn-reset");

    div3.appendChild(resetButton);

    divWrapper.appendChild(div1);
    divWrapper.appendChild(div2);
    divWrapper.appendChild(div3);

    document.body.appendChild(divWrapper);

    sumButton.addEventListener("click", increaseOperation);
    differenceButton.addEventListener("click", decreaseOperation);
    resetButton.addEventListener("click", reset);
}

function creationButton(value) {
    let button = document.createElement("button");
    button.innerHTML = value;
    return button;
}

function createTextElement(text, tag) {
    var element = document.createElement(tag);
    var t = document.createTextNode(text);
    element.appendChild(t);
    return element;
}

function createElement(tag, classList) {
    let element = document.createElement(tag);
    element.classList.add(classList);
    return element;
}