// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38 

const dayOfTheWeek = new Date();
let day = dayOfTheWeek.getDay();
if (day == 1) {
    day = 'Monday';
    if (day == 2)
        day = 'Tuesday';
         if (day == 3)
              day = 'Wednesday';
}

const hourTime = new Date();
let hour = hourTime.getHours();
let minutes = hourTime.getMinutes();
let seconds = hourTime.getSeconds()

// To Display AM and PM
let amPm = null;
if (hour >= 12) amPm = ' PM';
if (hour <= 12) amPm = ' AM'; 

// To display correct time and number in AM PM format
hour = hour - 12;

// --------------! pending issue: when 0 it displays - 12, need to fix that.

let fullHour = hour + amPm; 

console.log('Today is :' + ' ' + day + '\n' + 'Current Time is :' + ' ' + fullHour + ' ' + minutes + ' ' + seconds);