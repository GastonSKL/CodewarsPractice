// Exclusive "or" (xor) Logical Operator
// Overview
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// function xor(a, b) {
//     if(a == true && b == false){
//         return true;
//     }else if(a == false && b == true){
//         return true;
//     }else{ return false;}
//   }

//CORRECT!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   In javascript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// let v1 = 50,
//     v2 = 100,
//     v3 = 150,
//     v4 = 200,
//     v5 = 2,
//     v6 = 250;

// function equal1(){
//   let a = v1,
//       b = v1;
//   return a + b;
// }

// //Please refer to the example above to complete the following functions
// function equal2(){
//   let a =  v3, //set number value to a
//       b =  v1; //set number value to b
//   return a - b;
// }

// function equal3(){
//   let a =  v1, //set number value to a
//       b =  v5; //set number value to b
//   return a * b;
// }

// function equal4(){
//   let a =  v4, //set number value to a
//       b =  v5; //set number value to b
//   return a / b;
// }

// function equal5(){
//   let a =  v2, //set number value to a
//       b =  v3; //set number value to b
//   return a % b;
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let x = [1, 2, 3, 4];

// function grow(x){
//     debugger
//     let sum = 0;
//     let mul = 1;
//     for(i = 1; i < x.length ;i++){
//       sum = x[i];
//       mul = mul * sum;
//     }
//     return mul;
//   }

//   console.log(grow(x));

//WRONG

//   function growCorrect(x){
//     let res = 1;
//     for (let i = 0; i < x.length; i++) {
//         res *= x[i];

//     }
//     return res;
//   }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

// function basicOp(operation, value1, value2)
// {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//             break;
//         case '-':
//             return value1 - value2;
//             break;
//         case '*':
//             return value1 * value2;
//             break;
//         case '/':
//             return value2 != 0 ? value1 / value2 : 0;
//             break;

//         default:
//             break;
//     }
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort() {
//     return s.sort()[0].split('').join('***');
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

// const s = 'aSDqas'
// function hello() {
//     if(s == null || s == '') return 'Hello, World!';
//     else return 'Hello, '+ s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()+'!';
//   }

//   console.log(hello());

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//   The wide-mouth frog is particularly interested in the eating habits of other creatures.

//   He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

//   When he meets the alligator, it then makes a tiny mouth.

//   Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.

// function mouthSize(animal) {
//   return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// let a = 'asda!!!'
// function remove () {
//     let arrString = a.split('');
//     return arrString[arrString.length - 1] === '!' ? arrString.pop().join('');
//   }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//         if(haystack[i] === 'needle') return "found the needle at position " + i;
//     }
//   }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that checks if a given string (case insensitive) is a palindrome.

// const s = "Madam";
// const arr = [];
// function isPalindrome() {
//   let reverse = s.split("").reverse().join("");
//   return reverse.toLowerCase() === s.toLowerCase() ? true : false;
// }

// console.log(isPalindrome());

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// function findMultiples(integer, limit) {
//     let arr = [];
//     for (let i = 1; i <= limit; i++) {
//         i % integer == 0 ? arr.push(i)
//     }
//     return arr;
//   }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

// function multiTable(number) {
//     let string = "";
//     for (let i = 1; i <= 10 ; i++) {
//         result = i * number;
//         string += i +" * "+number+" = "+result + "\n ";
//     }
//     return string;
//   }

//   console.log(multiTable(5));

//INCORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

// function numberToString(num) {
//     return String(num).toString();
// }

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {
//     return numbers.sort(function(a, b){return a-b})[0] + numbers.sort(function(a, b){return a-b})[1]
//   }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// function maps(x) {
//     return x.map(e => e*2);
// }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

// class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//       return length * width * height;
//     }
//   }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

// const quarterOf = (month) => {
//     return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
// };

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums){
//         return nums != null ? nums.sort(function(a, b){return a-b}) : []
// }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// function sumStr(a,b) {
//   return String((Number(a) + Number(b)))
// }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
// Examples(Inputs-->Output):

// 100, 12 --> 100
// 99, 0 --> 100
// 10, 15 --> 100

// 85, 5 --> 90

// 55, 3 --> 75

// 55, 0 --> 0
// 20, 2 --> 0
// *Use Comparison and Logical Operators.

function finalGrade (exam, projects) {
  
}