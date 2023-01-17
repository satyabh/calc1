var storedNum=0;
let currentDisplay = 0;
let currentOp = '';
let clearOnNext = false;
function updateDisplay(a) {
    var current = document.getElementById("display-text").textContent;
    if ((current === '0') || (clearOnNext)) {
        document.getElementById("display-text").innerHTML = a;
        currentDisplay = parseInt(a);
        clearOnNext = false;
    }
    else {
        document.getElementById("display-text").innerHTML += a;
        currentDisplay = document.getElementById("display-text");
    }
}

function process(o) {
    var current = document.getElementById("display-text").textContent;
    if (currentOp === '') {
        storedNum = parseInt(current);
        clearOnNext = true;
        currentOp = o;
    }
    else {
        let ans = operate(storedNum,parseInt(current),currentOp);
        clearOnNext = true;
        updateDisplay(ans);
        currentOp = o;
        storedNum = ans;
        clearOnNext = true;
    }
}

function clear() {
    document.getElementById("display-text").innerHTML = '0';
    currentOp = '';
    storedNum = 0;
}

function equals() {
    var current = document.getElementById("display-text").textContent;
    if (!(currentOp === '')) {
        let ans = operate(storedNum,parseInt(current),currentOp);
        clearOnNext = true;
        updateDisplay(ans);
        storedNum = ans;
        clearOnNext = true;
        currentOp = '';
    }
}

function operate(a,b,o) {
    console.log("did an operation");
    if (o === '+') {
        let sum = a+b;
        return sum;
        console.log('added');
        console.log(sum);
    }
    if (o === '-') {
        return a-b;
    }
    if (o === '*') {
        return a*b;
    }
    if (o === '/') {
        return a/b;
    }
}