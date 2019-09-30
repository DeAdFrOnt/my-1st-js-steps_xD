//!TASK
/*Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

As a timeline, registration would look like this:registration-timeline

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).*/


//input random number for late runner from 0-1000
let raceNumberLateRunner = Math.floor(Math.random() * 1000);
//input random number for early runner from 1000-10000
let raceNumberEarlyRunner = Math.floor(Math.random()*(10000-1000)+1000);
console.log(raceNumberEarlyRunner)
//input runner registered early or not
const registeredEarly= false;
//input runner age
const runnerAge=19;
//out time to run
if(runnerAge<18){
  console.log('Your time to run is 12:30 am.')
}	else if(registeredEarly===true){
  console.log('Your time to run is 9:30 am.')
}	else if(registeredEarly===false){
  console.log('Your time to run is 11:00 am.')
}	else{
  console.log('Take a look at the schedule!')
}
//out number for runner
if(registeredEarly===true){
  console.log(`And number ${raceNumberEarlyRunner}. Good run!`)
}	else {
  console.log(`And number ${raceNumberLateRunner}. Good run!`)
}