let counter = 0;

function getIncrement() {
    counter++;
    return counter;
}

function getDecrement() {
    counter--;
    return counter;
}

function increaseOperation() {
    let currentCounter = document.getElementById('counter');
    currentCounter.innerHTML = getIncrement();
}

function decreaseOperation() {
    let currentCounter = document.getElementById('counter');
    if(currentCounter) currentCounter.innerHTML = getDecrement();
}

function reset() {
    let currentCounter = document.getElementById('counter');
    counter = 0;
    if(currentCounter) currentCounter.innerHTML = counter;
}