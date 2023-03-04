// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a string variable called "name" and set it to 'Dane'.
// We then check if the variable "name" is equal to 'Mary'; 
// If the variable is strictly equal to 'Mary', then the console log will say 'Hi, Mary!'.
// If the variable name is NOT equal to 'Mary', then the console log will say 'How do you do?'
// In this code example, the console log will show 'How do you do?' because the variable was already set to 
// 'Dane' and is not equal to 'Mary'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we create a variable called "secret" but do not assign it a value;
// we create another variable called "code" and set it to be a number variable with: 123.
// Then we check if the variable "code" is strictly equal to 123, in which case variable "secret" will then 
// be set to string a value of 'super', and variable "code" will be changed to multiply x2 its original value.
// (The value of "code" goes from 123 and then becomes 246 after this calculation)
// Then the next line of code checks if the variable "code" is greater than 250. If the value of "code" is greater than 250,
// the variable "secret" will be assigned a string value of 'duper'.
// At this time, the value of "code" is still 246 and therefore NOT greater than 250.
// Finally, after these calculations, the console log will display 'super' aka the value of variable "secret".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First declare a variable "isStudent" and assign it a boolean value of true. 
// Declare a variable "age" and assign it a number value of 34.
// Declare a variable "zip" and assign it a number calue of 55407.
// Then, use a compound conditional statement to check if variable "isStudent" is true AND the zip value is greater than 8000. 
// If both these things are true, the console log will show 'You're a student on the West Coast!'
// If one or neither of these are true, the code will then check (using a conditional statement) if variable "isStudent" is false AND/OR age is less than 30.
// If one of these conditions are met, the console log will show 'What are your hobbies?'
// If NEITHER of these conditions are met, the code will then check if variable "isStudent" is true and console log will show 'Welcome to Prime!'
// Finally, if NONE of the above conditions are met, the console log will show 'How about the weather?' 
// In this scenario, console log will show 'Welcome to Prime!' because "isStudent" is set to value 'true', zip is less than 8000,
// and age is greater than 30. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
//FIX: string value for colorOne should be 'blue' not 'red'.
let colorTwo = 'blue';
//FIX: string value for colorTwo should be 'red' not 'blue'. 
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  //FIX: colorTwo should also be set to 'purple'. Need to add another line of code, perhaps...
  //colorTwo = colorOne;
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
//POSSIBLE FIX: Because time is likely changing in this code example and is being checked in conditional comparison below,
// it might be better to declare it as a variable (rather than declaring "time" is a constant)

if (temp > 39 || time >= 4) {
  //FIX: in this case, the code would work because at least one of the statements is true. However per the description,
  //we want to check if BOTH are true. So the conditional statement should probably use logical AND (&&) conjunction operator 
  //instead of logical OR (||) disjunction operator. The code would instead be:
  // if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  //FIX: need to check if age is GREATER than or equal to minAge, so we should probably switch these variable and constant around:
  // if(age >= minAge){
  console.log('no entry');
  //SECOND FIX: after calculating age is greater than or equal to minAge, console.log should be 'enter' on this line. If the 
  //condition is met (age is greater than or equal to minAge), then console.log says 'enter'.
} else {
  console.log('enter');
  //THIRD FIX: if the condition is NOT met (age is less than minAge), we want console.log to show 'no entry'. So this line of 
  //code should be: console.log('no entry');
}

//FIX EXPLANATION: in some ways, the code on this example would logically work, but because it's all backwards, there is an 
//issue with the "age equals minAge" part of the code. In the description, using this code as it's originally written would
//make the console.log read 'no entry' because of this logical error (rather than the description states 'enter', since 
//both age and minAge are 21 in this example).

*/

