// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38 

const dayOfTheWeek = new Date();
let day = dayOfTheWeek.getDay();
if (day == 1) 
    day = 'Monday';
    else if (day == 2) 
        day = 'Tuesday';
        else if (day == 3)
             day = 'Wednesday';
            else if (day == 4)
                day = 'Thursday';
                else if (day == 5)
                    day = 'Friday';
                    else if (day == 6)
                         day = 'Saturday';
                        else if (day == 6)
                             day = 'Sunday';


const hourTime = new Date();
let hour = hourTime.getHours();
let minutes = hourTime.getMinutes();
let seconds = hourTime.getSeconds()

// To Display AM and PM
let amPm = null;
if (hour == 0) amPm = ' AM';
if (hour == 12) amPm = ' PM'; 

// It was showing 22 PM, needs to change to 10 PM, below is to display correct time and number in AM PM format
if (hour == 0) hour = 12;
if (hour != 0) hour - 12;

// fullhour variable

let fullHour = hour + amPm; 

console.log('Today is :' + ' ' + day + '\n' + 'Current Time is :' + ' ' + fullHour + ' ' + minutes + ' ' + seconds);