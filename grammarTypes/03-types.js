/*
* ***************
! TYPES
* ***************

? Data and Structure Types
* ***************
    - Primitive Data Types:
        - boolean
        - undefined
        - number
        - string
            - bigInt*
            - symbol*
    - null
    - Object
    - Function
*/

//? BOOLEANS
//* ***************

// A boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);


// ? NULL
// A null value is an empty value.  Think of it as an empty container that has space to fill.

let empty = null;
console.log(empty);

//? UNDEFINED
// No value has been assigned to a container.

let undef = undefined;
console.log(undef);
let password;
console.log(password);

/*
    - Null is like a container with nothing in it.
        - Null you can trust as zero - Undefined not so much.
    - Undefined is when a variable has never been set, or hasn't been created yet.
*/

//? NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999; //16 9's
console.log(rounded);
// JS gives us space for 15 9s before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed, be aware.

let whatIf = (0.2 *10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
// console.log('.' + whatIf);

//? STRINGS

// Strings represent text and are wrapped in either single or double quotes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
let bothQuotes = 'I said, "What about Bob?"';
console.log(inception, singleQ, bothQuotes);

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
// Analogy... writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.

console.log(typeof addThese);
console.log(typeof addTheseAlso);
// We can use an operator called 'typeof' that returns a string that tells us exactly what our variable "type" is.

let stringToNumber = Number('1150')
console.log(stringToNumber);
console.log(typeof stringToNumber);

// const log = console.log;  // We can reduce our typing by setting console log to a variable that doesn't change.
// log('test');

//? OBJECTS
/*
    - Objects are used to store many values instead of a singular value.
    - COnsider these as a collection of various properties.
    - denoted by curly brackets: {}
*/

let frodo = {
    race: 'hobbit', // string
//  (1)     (2)
    rings: 1, //number
    sting: true, //boolean
}

console.log(frodo);
console.log(typeof frodo);
//1:  Key
//2:  Value

let obj = {
    key: 'value'
};

console.log(obj);

//? ARRAYS
/*

    - Containers that hold a list of items.
    - denoted by square brackets: []
    - all items are within the square brackets.
    - regardless of datatype, each item is separated by a comma.

*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three']
// let anotherExample = []
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own.

let objArr = [{
    race: 'hobbit', // string
//  (1)     (2)
    rings: 1, //number
    sting: true, //boolean
}];

console.log(objArr);

//? ADDITION vs CONCATENATION
/*
    - JS sees the "+" symbol in two different ways.
        - When combined with numbers, uses built-in math functionality.
        - When combined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/*  CHALLENGE:

    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode

    Set each variable to its respective type.

    console.log your whole address (with a space between variables).
*/

let firstName = 'Eric';
let lastName = 'Winebrenner';
let zipcode = 46038;
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode);

//? String: Properties

/*
    - strings have properties, or the qualities associated with that string.
    - the length of a string is a property.
*/

let myName = "Bob";
console.log(myName.length);

//? String: Methods
/*
    - methods are tools that can help us manipulate our data
*/

let myNameIs = 'Eric';
console.log(myNameIs.toUpperCase()); // this is method that changes a string to uppercase
console.log(myNameIs.toLowerCase());

let home = 'My home is Fishers';
console.log(home.includes('Fishers'))  
