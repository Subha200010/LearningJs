//normal function

function grade() {
     console.log("hello");
}
grade() // it will print hello
console.log(grade); //it will print the whole func body
console.log(grade()); // it will print two output 1.hello 2.undefined


//ananymous function ----> we can't write it because it throw an error

/* a without identifier is called ananymous function
function () {
     console.log("hello");
}   */

//Function with Expresion

let x=function () {
    console.log("hi");
}

console.log(x); // print whole func body

// for calling the func 
x() // print 'hi'

console.log(x()); // it will print two output 1.hi 2.undefined