// Booleans - represents something being true or false
let isOn = true;

let isRaining = false;

// NULL - means nothing, empty
let empty = null;



// Undefined
/*let undef = undefined;
console.log(undef);

let whatAmI;
console.log(whatAmI);
*/


//Numbers 
let degrees = 90;
console.log(degrees);

let ratherLarge = 999999999999999; // this is 15 9's
console.log(ratherLarge);

let whatIsGoingOnHere = 9999999999999999;// this is 16 9's, this is the cap 
console.log(whatIsGoingOnHere); 

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard=(0.2 * 10 + 0.1 + 10)/10;
console.log(numbersAreHard); //order of operations work in java

let created = Number('123') // this will turn 123 into the number 123.. turn created into number
console.log(created);


let acd = Number('z');
console.log(acd);// will reture nan bc not a number


//strings
let stringOne = "doubleydoos";
let sringTwo = 'singleydoos'; /// can use '' or  "" for string, should use one or other


    //can use math is strings
let first = 1050 + 100;
let second = '1050' + 100;
let third = 1050 + '100';
let last = '1050' + '100'; // if you use '' on numbers it will count as word and not do math
console.log( first, second, third, last);

let firstName='Devin';
let lastName = 'Owen';
console.log(firstName +' ' + lastName); //must add ' ' when adding to make space

// escape character when you need to use '' or "" in code
 // if you had to do it to \ then  '\\ sentance \ sentence\\'
let myMessage = 'don\'t do this'; //instead of 'don't do this'
console.log(myMessage);


//object everything is technically an object
//object are in key value pair      key:value

 let frodo = {         //object can have serveral types
    race: 'hobbit',  // string
    rings: 1,       // number
    cloak: true,     //boolean
    primaryWeapon:{ //another object within object
        name:'sting',
        attack: 30,
        damage: false

     
    },
    damage: 'poison',
    hunger: 5,
};

console.log(typeof frodo); 


//Array   

let groceryList =[
    'bannana',
    'kiwi',
    'coconut',
    21
];
let aThing=[23, {isOn: true, electricity:'AC'}, ['wallaby']];//only three things in here

console.log(aThing instanceof Array);

// STRINGS: METHODS
let userTitle = '           a DaY in tHE LIfe of dev        '; //imagine user did this
console.log(userTitle.toUpperCase()); //this makes it capitalize
console.log(userTitle); //has original form bc .toUpperCase modifies copy not original
console.log(userTitle.trim()); // gets rid of spaces
console.log(userTitle.includes('in')); //allows you to exclude words
console.log(userTitle.includes('toe'));
// console.log var.(then look options)












