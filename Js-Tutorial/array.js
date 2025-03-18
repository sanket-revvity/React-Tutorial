const marvel = ["Thor", "Ironman", " SpiderMan"]
const dc = ["Superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel);
// op: ["Thor", "Ironman", " SpiderMan", ["Superman", "flash", "batman"]]

// let newArr = marvel.concat(dc)
// console.log(newArr);
// op: ["Thor", "Ironman", " SpiderMan", "Superman", "flash", "batman"]


// ... is spread operator i.e, for example a glass is dropped from a height and its glass pieces are spread all over the floor
// const newArr = [...marvel, ...dc]
// console.log(newArr);
// op: ["Thor", "Ironman", " SpiderMan", "Superman", "flash", "batman"] 

// const arr = [1, 2, ,3, [4, 5] , 6, [7, [8, 9]]]
// const arr1 = arr.flat(Infinity)
// console.log(arr1);

console.log(Array.isArray("Sanket")) //false
console.log(Array.from("Sanket")) //["S", "a", "n", "k", "e", "t"]
console.log(Array.from({name:"Sanket"})) // this is an intresting case where it will return an empty array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)) // [100, 200, 300]