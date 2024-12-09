const name = "Munna"
const repoCount = 50

// console.log( name +  repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Munna')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const url = "https://munna.com/munna%20singh"

console.log(url.replace('%20','-'));

console.log(url.includes('munna'));