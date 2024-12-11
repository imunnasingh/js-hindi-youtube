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

// console.log(loginUserMessage("Munna"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "munna",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject(
    {
        username: "munna",
        price: 399
    }
)

const myNewArray = [200, 400, 100, 600]

    function returnSecondValue(getArray){
        return getArray[1]
    }

    // console.log(returnSecondValue(myNewArray));
    console.log(returnSecondValue([200, 500, 749, 398]));
