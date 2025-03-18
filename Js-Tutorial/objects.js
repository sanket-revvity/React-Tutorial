//Singleton
// Object.create

// Object Literals
let mySym = Symbol("key1") //Symbol Defination

const person = {
    name: "Sanket",
    [mySym] : "myKey",
    age : 20,
    city : "Thane",
    email : "sanket@gmail.com",
    isLoggedIn: false
}

// console.log(person)
// console.log(person.name)
// console.log(person["name"])
// if there is any key that is inside double quotes then we can access it using square brackets only

// To access  a symbol from object we have to use square brackets
// console.log(person[mySym])
// console.log(typeof mySym);

// To change something in object use dot operator
// person.email = "Sanket@test.com"
// Object.freeze(person) // This will freeze the object and we cannot change the values of the object
// person.email = "Sanket@google.com"
// console.log(person)

// person.greeting = function(){
//     console.log("Hello, I am Sanket")
// }

// console.log(person.greeting())

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}
let obj3 = Object.assign({},obj1,obj2) // we use a empty parenthesis as target element because we dont want to change the original object
// console.log(obj3)

// COncating of objects into one can also be done by spread operator
let obj4 = {...obj1,...obj2}
// console.log(obj4)

//Objects Destructuring
const company = {
    companyName: "Google",
    location: "Mumbai",
    employees: 1000
}

// course.companyName : you can also call the variable like this but mostly we use destructuring
const {companyName : cname, location, employees} = company
console.log(cname, location, employees) // You can also change the name of the variable while destructuring

