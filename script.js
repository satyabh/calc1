var storedNum=0;
let currentDisplay = 0;
let currentOp = '';
let clearOnNext = false;
let spamPrevent = true;
function updateDisplay(a) {
    var current = document.getElementById("display-text").textContent;
    spamPrevent = false;
    if ((current === '0') || (clearOnNext === true)) {
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
    if (spamPrevent === true) {
        console.log("spam ignored");
        return;
    }
    else {
        if (currentOp === '') {
            storedNum = parseInt(current);
            clearOnNext = true;
            currentOp = o;
            spamPrevent = true;
        }
        else {
            let ans = operate(storedNum,parseInt(current),currentOp);
            clearOnNext = true;
            updateDisplay(ans);
            currentOp = o;
            storedNum = ans;
            clearOnNext = true;
            spamPrevent = true;
        }
    }
}

function clr() {
    console.log("reset");
    currentOp = '';
    storedNum = 0;
    spamPrevent = true;
    document.getElementById("display-text").innerHTML = "0";
    return;
}

function changeSign() {
    var current = document.getElementById("display-text").textContent;
    if (!(current === '0')) {
        let ans = parseInt(current)*-1;
        document.getElementById("display-text").innerHTML = ans;
    }
    else {return;}
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
        console.log('added');
        console.log(sum);
        return sum;
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
    else {return;}
}