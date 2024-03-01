let x=[10,20,30,40]
console.log(x); //array type  [ 10, 20, 30, 40 ]
x.pop() //remove element from last
console.log(x); //array type [ 10, 20, 30 ]
x.push(50) //add element in the end
console.log(x); // array type [ 10, 20, 30, 50 ]

let arr=["hello",'a',10,true,2.2]  // collection of homo and heterogenius datatype
console.log(arr); //array type [ 'hello', 'a', 10, true, 2.2 ]
arr.shift() //remove the element from 1st
console.log(arr); //array type [ 'a', 10, true, 2.2 ]
arr.unshift(20) // add element int the 0th index
console.log(arr); //array type [ 20, 'a', 10, true, 2.2 ]


let arr2=[10,20,40,50]

console.log(arr2); //araytype [10,20,40,50]

let r1=arr2.includes("bye") // check the element if its present or not  ---> returns true or false value
console.log(r1); //false
let r2=arr2.indexOf(40) // return the index number of the particular elemrnt of this array
console.log(r2); // 2