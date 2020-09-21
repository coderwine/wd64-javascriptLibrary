// Write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.

// characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.

// items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 288,
    characters: [
        {
            name: 'Legolas',
            age: 2931,
            items: [
                {itemOne: 'Bow and Arrow'},
                {itemTwo: 'Dagger'},
            ],
        },
        {
            name: 'Gandalf',
            age: 2019,
            items: [
                {itemOne: 'Sword'},
                {itemTwo: 'Staff'},
            ],
        },
    ],

    genre: 'Action & Adventure'
}

// Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has.

console.log(lotrObj.nameOfMovie);
console.log(lotrObj.runTime);
console.log(lotrObj.characters);
console.log(lotrObj.characters[0].name);
console.log(lotrObj.characters[0].items[0].itemOne);