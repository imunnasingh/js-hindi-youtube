// Singleton

//object literals
const mySym = Symbol("key1")


Object.create
const JsUser = {
    name: "Munna",
    "full name": "Munna Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "noida",
    email: "Munna@google.com",
    lastLoginDays: ["Monday", "Friday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "munna@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "munna@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());