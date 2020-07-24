let budget = document.getElementById("budget").value;
let total = 0;
let balance = 0;
let qnApple = 0;
let priceApple = 12;

document.getElementById("addAppleButton").onclick = function() {
    if (budget == 0) alert("Insufficient Balance");
    else {
        qnApple = qnApple + 1;
        total = qnApple * priceApple;
        balance = budget - total;
        document.querySelector("qnApple").innerHTML = qnApple;
        document.getElementById("total").innerHTML = total;
        document.getElementById("balance").innerHTML = balance;
    }
}

function minusApple() {
    if (qnApple !== 0) {
        qnApple--;
        total = qnApple * priceApple;
        balance = budget - total;
        document.querySelector("qnApple").innerHTML = qnApple;
        document.getElementById("total").innerHTML = total;
        document.getElementById("balance").innerHTML = balance;
    }
}