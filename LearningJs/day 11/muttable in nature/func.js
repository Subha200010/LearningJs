const a={
    name:"subh"

}
console.log(a);
a.name="none"  // we can modify the state of an object whatevere it is const,let var
console.log(a);

// a="hi" // it will give an error because its defines as const

let b={
    name:"none"
}
console.log(b);
b="none" // it is acceptable beacuse object declaration as let
console.log(b);