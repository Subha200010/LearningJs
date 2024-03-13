 
 let address={
    city: "banglore",
    state: "Karnataka"
 }
 
 
 
 let empDetails={
    emoId:1,
    empCompany:"INFY"

 }
 let skills=["html","css","js"]

 let person ={
    name:"subh",
    age:25,
    address,   // it is the object 
    empDetails,// it also an object
    skills //array type

 }
  //Access the state of the nested objects
 console.log(person.address.city); // banglore
 console.log(person.empDetails.empCompany); // INFY
 console.log(person.skills[2]) // js 