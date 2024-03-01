let student={
    name:"suvo",
    age :23
}
console.log(student); // { name: 'suvo', age: 23 }

console.log(student.name); //suvo
console.log(student.age); //23

console.log(student.marks); // undefined
// when we don't have attribute in object but we want  to print it  ,so js engine automatically create the calling attribute  and assing undefined

student.marks="star" // after assing a value it reassung  to it

console.log(student.marks); //star 

delete student.age  // delete the age attribute from student
console.log(student); 
