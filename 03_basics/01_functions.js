function sayMyName(){
    console.log("M");
    console.log("U");
    console.log("N");
    console.log("N");
    console.log("A");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);

}
// addTwoNumbers(3,5)


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

 const result = addTwoNumbers(3,5)
//  console.log("Result: ", result);


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Munna"));