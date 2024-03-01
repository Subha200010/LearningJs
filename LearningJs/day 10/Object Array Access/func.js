 

 let person={
    name: "suvo",
    role: "Full Stack Developer",
    age: 23,
    skills:["java","sql","programming"],
    friends: [{
        name: "rohit",
        role: "full stack-1",
        age: 23,
        skills:["java","sql"]
    },
    {
        name: "sovik",
        role: "front-end",
        age: 23,
        skills:["html","css","js"],

    },
    {
        name: "adhikary",
        role: "back-end",
        age: 23,
        skills:["java","mongo"],

    }
]

 }
 //access the object inside object
 console.log(person.friends[0]); // object type

 // acces the  skill array for particular friend ---->ex 0
 console.log(person.friends[0].skills); // [ 'java', 'sql' ] ----->array type


console.log(person.friends[0]); // object type

 //acces the skill array 
 console.log(person.friends[0].skills[1]); // sql ----->String type

 /*=============================================================================================================================*/

 //update the skills of person (add an array element in 2nd last in array)

 person.skills.splice(2,0,"web")  // addin element adter index 2 , 0 element deleted ,add element "web"

 console.log(person.skills); // [ 'java', 'sql', 'web', 'programming' ]


 /*-----------------------------------------------------------------------------------------------------------------------------*/

 let p= ` my name is ${person.name}, I am 
 working as ${person.role} 
 these are skills listed below--> 
 1.${person.skills[0]}
 2.${person.skills[1]}
 3.${person.skills[2]}
 4.${person.skills[3]}
 
 I have few friends they are--> 
 1.${person.friends[0].name}
 2.${person.friends[1].name}
 3.${person.friends[2].name}`

 console.log(p);
