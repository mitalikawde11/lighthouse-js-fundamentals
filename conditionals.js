const temperature = -41;
const isCitizen = true;
const age = 30;
const raining = false;


if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}
console.log("Now you're ready to go outside!");
/*
//if statement using logical operators
if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if(!raining){
  console.log("Leave your umbrella at home!");
} 
*/
// Checking the age to help learners for deciding which school they attend.
if (age >=1 && age <=12) {
  console.log("I am " + age + ". Which school should I go to?");
  console.log("Elementary School");
} else if (age >= 13 && age <= 18) {
  console.log("I am " + age + ". Which school should I go to?");
  console.log("Secondary School");
} else {
  console.log("I am " + age + ". Which school should I go to?");
  console.log("Lighthouse Labs");
} 
