// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

const a = 5;
const b = 6;
const c = 7;

let semiPerimeter = (a + b + c);
let s = semiPerimeter/2;

let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

console.log(area);

// sanity check, triangle calculator here https://www.calkoo.com/pt/calculadora-do-triangulo, confirmed as Area=16,...

