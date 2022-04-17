// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically
// removing one letter from the end of the string and attaching it to the front.

// I guess I can use arrays to do something like this
// Array reference doc https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// array reference doc https://www.w3schools.com/jsref/jsref_obj_array.asp
// try copyWithin()? or splice()?

let a = 'w';
let b = '3';
let c = 'r';
let d = 'e';
let e = 's';
let f = 'o';
let g = 'u';
let h = 'r';
let i = 'c';
let j = 'e';

let w = [a, b, c, d, e, f, g, h, i, j]
// counts array
let u = w.length;
console.log(w.join(''));

// gets index of last element and 
const getIndex = w.indexOf(j);
const toIndex = 0;
const splice = w.splice(9, 1);



console.log(w.join(''));

console.log("array lenght:" + ' ' + u);
console.log(splice);
console.log(splice + w.join(''));

