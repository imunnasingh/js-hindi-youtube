
if (true) {
    let a = 2
    const b = 3
    var c = 5

}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "munna"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "munna"
    if (username === "munna") {
        const website = " youtube"
        // console.log(username + website);

    }
    // console.log(website);
}
// console.log(username);

// ********** interesting ************

console.log(addOne(5))
function addOne(num){
    return num + 1
}

console.log(addTwo(5))
const addTwo = function(num){
    return num + 1
}