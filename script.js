const display = document.getElementById('display');

function appendNumber(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value)
}

function clearDisplay() {
    display.value = ""
}

function deleteNumber(){
    display.value = display.value.slice(0, -1)
}