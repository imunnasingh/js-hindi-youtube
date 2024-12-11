const user = {
    username: "munna",
    price: "999",
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "singh"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "munna"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "munna"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "munna"
    console.log(this.username);
}

// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addTwo(5, 8));

// const addTwo = (num1 , num2) =>   num1 + num2

// const addTwo = (num1 , num2) =>   (num1 + num2)
   
const addTwo = (num1 , num2) =>  {(num1 + num2)} 

console.log(addTwo(5, 8));
