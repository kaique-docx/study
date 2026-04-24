let num = document.getElementById("number").value
let res = document.getElementById("res")

function analyseNumber(num){
    
    //Positive, Negative or Zero
    let natural = "positive"
    if (num > 0){
        natural = "positive"
    } else if (num < 0){
        natural = "negative"
    } else if (num == 0){
        natural = "zero"
    }

    //Even or Odd
    let parity = "even"
    if (num % 2 == 0) {
        parity = "Even"
    } else {
        parity = "Odd"
    }
    
    //Number List
    res.innerHTML += "The number is " + natural + " and " + parity + "<br> Number Sequence List: <br>"

    for(let i = 1; i <= num; i++){
        res.innerHTML += i + ", ";
    }
}