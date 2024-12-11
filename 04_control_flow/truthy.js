const userEmail = "m@munna.ai"

if(userEmail){
    console.log("got user email");
}else{
    console.log("done");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("Array is empty");
// }

const emtyObj = {}

if (Object.keys(emtyObj).length === 0){
    console.log("Objet is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10



// console.log(val1);

//terniary operator
// codition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") :console.log("more than 80")