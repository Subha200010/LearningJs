let a=10
function x(){
    a=20
    console.log(a);
    function y(){
       a=30
       return 40
    }
    console.log(a);
    a= y()
    console.log(a);
}
console.log(a);
x()