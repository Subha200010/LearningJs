let m=['hi','hello']
let x=[10,20,30,40]
let y=[50,60,70,80]
let z1=[x,y];  // nested array
console.log(z1); //print the nested array [ [ 10, 20, 30, 40 ], [ 50, 60, 70, 80 ] ]
console.log(z1[0][1]); //20

let z2=x.concat(y)  //merging two array
console.log(z2); 

let z3=x.concat(y,m) //we can we n number of elements in the concat fuction
console.log(z3);