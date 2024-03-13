let a=()=>"hello"
console.log( a());

b=()=>{
    console.log("hdd");
    console.log("ssd");
}
b()

s=c=>c

console.log(s(10));

s1=(a,b)=>{
    console.log(a);
    console.log(b);
}
s1()


//----------------------------------------

function x(param1,param2=0) {
    console.log(param1+param2);
}

// x(4) //------------------------------>NaN

x(3,4)




