let a = 10

// function one(){
//     // console.log("Gloabal variable:", a) // This will give error as a is not defined and it does not have access to global variable
//     let a =20
//     console.log("Local variable:", a)
// }

// console.log(one())
// console.log("Global variable:", a)


function two(){
    let b = 30
    function three(){
        let c = 40
        console.log("Local variable:", b) // this will print the value of b as it has access to the global variable
    }
    three()
    // console.log("Local variable of fucntion three:", c)
}

// console.log(two())


// **********************intersting************************
console.log(addOne(5)) // This function can access the function before the function is defined

function addOne(num){
    return num + 1
}

console.log(addTwo(5)) // This function will give error as it is defined as a variable and it is not hoisted

const addTwo = function(num){
    return num + 2
}


