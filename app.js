// synatx
// is the set of rules
// fixed vs variable

//console.log("Hassen")

//when the value is chaging variable

// var, let and const===> keywords
/*
let name = "Hassen";
console.log(name);
name ="ali";
console.log(name);

const price = 10; // coonstan
console.log(price);

*/

// Datatype
// string , number , boolean, null , undefined 
/*
let name = "hassen";
let score = -10;
let isComplete = true;
let y = null;
let x ;

console.log(typeof(name));
console.log(typeof(score));
console.log(typeof(isComplete));
console.log(typeof(y));




//String Methods
let name = "Hassen Ali";
console.log(name.toLowerCase())


// Array 
const numbers = new Array(1, 2, 3, 4, "Hassen"); // element , 0 -3 index
const names = ["abebe", "seyfu", true]; // array 
names.push("Tadele");
names.unshift("almaze");

//const name = names.pop();
//console.log(name);
//console.log(Array.isArray(names));
//console.log(names.includes("abebe"))
console.log(names)

const arr = names.map(function(name){
  return name.length;
})
*/
//const names = ["abebe", "seyfu", "true"];

// Object 
/*
const student = {
    firstName : "Hassen",
    lastName : "ali",
    grades : [
        "A", "B"
    ],
    
    address : {
        street : "57",
        city : "Alexadria",
        state : "va"
    }
};

const { firstName, lastName, address : {city} } = student;
const students = [
    {
        firstName : "Hassen",
        lastName : "ali",
        grades : [
            "A", "B"
        ],
        
        address : {
            street : "57",
            city : "Alexadria",
            state : "va"
        }
    },

    {
        firstName : "Abebe",
        lastName : "Seyfu",
        grades : [
            "A", "B"
        ],
        
        address : {
            street : "57",
            city : "Alexadria",
            state : "va"
        }
    }
]

console.log(students[1]);



//JSon

const studentJson = {
    "firstName" : "Hassen",
    "isComplete" : true,
    "id" : 10 
};

const arr = {
    "students" :   [
    {
       "firstName":"Hassen",
       "lastName":"ali",
       "grades":[
          "A",
          "B"
       ],
       "address":{
          "street":"57",
          "city":"Alexadria",
          "state":"va"
       }
    },
    {
       "firstName":"Abebe",
       "lastName":"Seyfu",
       "grades":[
          "A",
          "B"
       ],
       "address":{
          "street":"57",
          "city":"Alexadria",
          "state":"va"
       }
    }
 ]
}



// conditional statements

const x = "4";
// datatype and values

if (x === 5){
    console.log("x is 5");   
}else if(x > 5){
    console.log("x is greater 5");
}else{
   console.log("x is less than 5")
}

// ? : 

const y = 9;
const name = y === 8 ? " y is 8" : "y is not 8";
console.log(name)



//switch
const color = 'orange';
switch(color){
    case 'red' :
        console.log("its red");
        break;
    case 'yellow' :
        console.log("its yellow");
        break;
    case 'blue' :
        console.log("its blue");
        break;
    default :
       console.log("Unknown colors");
       break;       

}


// loop
// for , while, for of , forEach, map

for (let i = 0; i < 10; i++){
    console.log(`for loop index ${i}`);
}


let i = 0;
while(i < 10){
    console.log(`while index ${i}`);
    i++;
}



const students = [
    {
        name : "Hasse",
        id : 1,
        isComplete : true
    },
    {
        name : "Abebe",
        id : 2,
        isComplete : true
    }

]

const names = students.find((s) => {
    return s.isComplete  === true;
})

console.log(names)

*/

// function
//defined

function addNum (num1, num2){
   
    if (typeof(num1) === "number" && typeof(num2) === "number"){
        return num1 + num2;
    }

    return "Invalid number";
}

const addNum1 = (num1, num2) => {
   
    if (typeof(num1) === "number" && typeof(num2) === "number"){
        return num1 + num2;
    }

    return "Invalid number";
}

const sum = addNum(5, 9); // call
console.log(sum);


class Car {

    constructor(firstName){
        this.name = firstName;
    }


    getFullName(){
        return this.name;
    }

}

const bmw = new Car("BMC")




 












