console.log('Javascript Objects Lecture');

//here's an example object
//this is object literal notation
//these are object literals
const topHat = {
    type: 'Top', //string
    color: 'Black',
    size: 14 //number, value 14
};
/*
The thing on the left is called the key or the property
The thing of the right is called the value
*/

const baseballHat = {
    type: 'Baseball Cap', 
    color: 'Red and White', 
    size: 12
}; //JS is nice but you should have a semicolon here

//we're going to be working with objects A LOT

//log The size 12 Baseball Cap is Red and White
console.log( 'The size', baseballHat.size, baseballHat.type, 'is', baseballHat.color ); 
//objects allow us to use dot notation and keys
//METHODS ARE FUNCTIONS so they have parentheses 
/** 
 * console.log is a method, and it's special bc it can take 
 * however many parameters you give it
 * it just logs them all with a space between them
 * it's talented that way
 * notice when we did this WITH COMMAS that 12 got logged blue 
 * ~~so it's still a number
 * console.log nicely spaces things when we put commas
 * when you concat, the nice spaces go away because we have to make them 
 * without commas the 12 won't be blue
 */

//so this is bracket notation
//you put quotes around it
//basically use this in situations where you don't know in advance which property you want
console.log('The size', baseballHat['size'], baseballHat['type'], 'is', baseballHat['color'] );

//Constructors to make Objects
//this is capitalized bc it's a constructor
function Hat(typeInput, colorInput, sizeInput) {
    this.type = typeInput;
    this.color = colorInput;
    this.size = sizeInput;
}
//constructor is kinda like a cookie cutter
//instances of an object are kinda like cookies

const averageTopHat = new Hat('Top', 'Black', 14);
console.log(averageTopHat);
const funnyHat = new Hat('Beanie', 'Multicolored', 10);
console.log(funnyHat);

//lil note: the things that get passed into functions are called parameters

//Using Classes to Make Objects
class AudioPlayer {
    constructor(currentSong) {
        this.currentSong = currentSong;
    }

    play() {
        console.log('Playing ' + this.currentSong + '!');
    }
} //this is the class, but we have yet to create an object

const audioPlayerInstance = new AudioPlayer('What does the Fox Say?');
console.log(audioPlayerInstance);

//every method is a function, like squares and rectangles