// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var date1 = "01/01 /1999"
var gradDate = moment(date1).format('MMM Do, YYYY');
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var date2 = '01/01/22'
var weekDay = moment(date2).format(`${date2} [is a] dddd`); 
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var now = moment().format('DDDo');
$("#3a").text(now);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
// var time = moment().format('hh:mm:ss:SS a');
var time = moment().format('LTS');
$("#4a").text(time);

// https://stackoverflow.com/questions/44971954/how-to-get-am-pm-from-the-date-time-string-using-moment-js

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
date3 = "1318781876";
var unixFormat = moment.unix(date3).format('dddd MM/DD/YYYY')
$("#6a").text(unixFormat);

