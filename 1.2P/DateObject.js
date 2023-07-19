// Create a new Date object
let date = new Date();

// Log the current date and time
console.log("Current date and time: " + date.toString());

// Log the current year using getFullYear
console.log("Current year: " + date.getFullYear());

// Log the current month using getMonth 
console.log("Current month: " + (date.getMonth() + 1));

// Log the current date of the month using getDate
console.log("Current day of the month: " + date.getDate());

// Log the current day of the week using getDay
console.log("Current day of the week: " + date.getDay());

// Set the date to the 1st of the month using setDate
date.setDate(1);
console.log("Updated date: " + date.toString());