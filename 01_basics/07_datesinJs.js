// Dates
let myDate = new Date()
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate = new Date(1998,10,11)
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

// ${newDate.getDay()} and the time
newDate.toLocaleString('default', {
    weekday: "long"
})