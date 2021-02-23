let sumButton; 
let differenceButton;
let resetButton;

function loadElements() {

    createTitle();

    createDivWrapper();

    sumButton.addEventListener("click", increaseOperation);
    differenceButton.addEventListener("click", decreaseOperation);
    resetButton.addEventListener("click", reset);
}

function createDivWrapper(){
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

    sumButton = createButton('+');
    sumButton.classList.add("btn");
    sumButton.classList.add("bouncy");
    
    differenceButton = createButton('-');
    differenceButton.classList.add("btn");
    differenceButton.classList.add("bouncy");
    differenceButton.classList.add("delay");

    div2.appendChild(sumButton);
    div2.appendChild(differenceButton);

    let div3 = createElement("div");
    div3.classList.add("buttons-group");
    div3.setAttribute("id", "reset");

    resetButton = createButton('Reset Counter');
    resetButton.classList.add("btn-reset");

    div3.appendChild(resetButton);

    divWrapper.appendChild(div1);
    divWrapper.appendChild(div2);
    divWrapper.appendChild(div3);

    document.body.appendChild(divWrapper);

}

function createTitle() {
    var element = document.createElement("h1");
    var t = document.createTextNode("Counter");
    element.appendChild(t);
    document.body.appendChild(element);
}

function createButton(value) {
    let button = document.createElement("button");
    button.innerHTML = value;
    return button;
}

function createElement(tag) {
    let element = document.createElement(tag);
    return element;
}