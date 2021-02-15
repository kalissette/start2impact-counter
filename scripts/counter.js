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
    currentCounter.innerHTML = this.getIncrement();
}

function decreaseOperation() {
    let currentCounter = document.getElementById('counter');
    currentCounter.innerHTML = this.getDecrement();
}

function reset() {
    let currentCounter = document.getElementById('counter');
    counter = 0;
    currentCounter.innerHTML = counter;
}