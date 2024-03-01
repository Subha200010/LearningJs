let arr=[10,20,30,40,50]
arr.splice(1,0,"hi") //starting index 1 ,delete element 0 ,add element 'hi' in the starting index(1)
console.log(arr); // splice method modify the original array -----> [ 10, 'hi', 20, 30, 40, 50 ]

let arr1=['a','b','c','d']
 arr1.slice(0,3) // passing starting index and ending index  but ending index always ignore
 console.log(arr1); // [ 'a', 'b', 'c', 'd' ] it is not change because 'slice' method do not modify the original array
 let x=arr1.slice(0,3) // for this method need to store in a varriable
 console.log(x); // [ 'a', 'b', 'c' ]
