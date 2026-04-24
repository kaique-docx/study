var num = document.getElementById("number").value
var res = document.getElementById("res")
var parity = "even"
var natural = "positive"

function analyseNumber(num){
    //Positive, Negative or Zero
    if (num > 0){
        natural = "positive"
    } else if (num < 0){
        natural = "negative"
    } else if (num == 0){
        natural = "zero"
    }

    //Even or Odd
    if (num % 2 == 0) {
        parity = "Even"
    } else {
        parity = "Odd"
    }
    
    res.innerHTML += "The number is " + natural + " and " + parity + "<br> Number Sequence List: <br>"

    for(i = 1; i <= num; i++){
        res.innerHTML += i + ", ";
    }
}