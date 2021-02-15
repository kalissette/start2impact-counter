/* Start */
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
    var currentCounter = document.getElementById('counter');
    currentCounter.innerHTML = this.getIncrement();
}

function decreaseOperation() {
    var currentCounter = document.getElementById('counter');
    currentCounter.innerHTML = this.getDecrement();
}

function reset() {
    var currentCounter = document.getElementById('counter');
    counter = 0;
    currentCounter.innerHTML = counter;
}