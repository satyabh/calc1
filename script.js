var storedNum=0;
let currentDisplay = 0;
let currentOp = '';
let clearOnNext = false;
let spamPrevent = true;
let dotUsed = false;

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

function dot() {
    if (dotUsed === true) {
        console.log("ignored");
        return;
    }
    else {
        if (clearOnNext === true) {
            document.getElementById("display-text").innerHTML = '.';
            currentDisplay = document.getElementById("display-text");
            spamPrevent = true;
            dotUsed = true;
            clearOnNext = false;
        }
        else {
            document.getElementById("display-text").innerHTML += '.';
            currentDisplay = document.getElementById("display-text");
            spamPrevent = true;
            dotUsed = true;
            clearOnNext = false;
        }
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
            if (dotUsed === true) {
                storedNum = parseFloat(current);
            }
            else {
            storedNum = parseInt(current);
            }
            clearOnNext = true;
            dotUsed = false;
            currentOp = o;
            spamPrevent = true;
        }
        else {
            let now;
            if (dotUsed === true) {
                now = parseFloat(current);
            }
            else {
            now = parseInt(current);
            }
            let ans = operate(storedNum,now,currentOp);
            clearOnNext = true;
            updateDisplay(ans);
            currentOp = o;
            storedNum = ans;
            clearOnNext = true;
            dotUsed = false;
            spamPrevent = true;
        }
    }
}

function clr() {
    console.log("reset");
    currentOp = '';
    storedNum = 0;
    dotUsed = false;
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
        let now;
            if (dotUsed === true) {
                now = parseFloat(current);
            }
            else {
            now = parseInt(current);
            }
        let ans = operate(storedNum,now,currentOp);
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
        if (b != 0) {
        return a/b;
        }
        else {
            return "hell nah";
        }
    }
    else {return;}
}