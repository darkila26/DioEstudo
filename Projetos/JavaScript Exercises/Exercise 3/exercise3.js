// 3. Write a JavaScript program to get the current date
// reference page with JS date codes and definitions https://www.w3schools.com/js/js_dates.asp
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

const fullDate = new Date();

let fyear = fullDate.getFullYear();
let fmonth = fullDate.getMonth();
let fday = fullDate.getDay();
 

console.log(fday + ' - ' + fmonth + ' - ' + fyear);

