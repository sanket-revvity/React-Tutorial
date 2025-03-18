// this keyword in objects
const user = {
    userName : "Sanket",
    city: "Thane",
    greeting: function(){
        console.log(`Hello, I am ${this.userName}`) // this key is used to know about current context
    }
}

user.greeting()

// this keyword in normal function 
function greet(){
    let username = "Sanket"
    console.log(this.username) // This will give undefined as this keyword does not work in normal function
}

console.log(this) // this will give empty object in node environment and window object in browser environment

// Arrow function
const addTwo = (num1,num2) => {
    return num1 + num2
}

// Arrow function with single line using implicit return
const addThree = (num1,num2,num3) => num1 + num2 + num3 // here we dont need to use return keyword

console.log(addTwo(5,6))



