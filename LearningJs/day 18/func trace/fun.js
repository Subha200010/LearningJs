//1
function x(){
    let a=10
    console.log(a);
}
let z=x()
console.log(z);
//2
function a(){
    let b=10
    function c(){
        console.log(b);
    }
    return y()
}
console.log(x());

