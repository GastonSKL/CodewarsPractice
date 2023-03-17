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

// function finalGrade(exam, projects) {
//   if (exam > 90 && projects > 10) return 100;
//   else if (exam > 75 && projects >= 5) return 90;
//   else if (exam > 50 && projects >= 2) return 75;
//   else return 0;
// }

// INCORRECTO, EL PROBLEMA CLARAMENTE PIDO UN OR EN EL PRIMER IF

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// var isAnagram = function (test, original) {
//   return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
// };

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// let string1 = 'xyaabbbccccdefww'
// let string2 = 'xxxxyyyyabklmopq'
// function longest() {
//     debugger
//     return [...new Set(string1 + string2)].sort().join('')    //El objeto set que instancio aca me deja crear un array de valores unicos sn la necesitadad de aplicar ningun filtro,
// }                                                             //esto sirve no solo para valores tipo string o char si no que hasta para otros objetos.

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// function gimme() {
//   debugger
//   const arr = [5,16,14]
//   return arr.indexOf(arr.concat().sort(function(a, b) { return a - b })[1])
// }
// console.log(gimme());

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]
// let arr = [1,2,3,5,4];

// function removeSmallest() {
//      arr = arr.slice(0);
//     let min = Math.min(...arr);
//     arr=  arr.splice(arr.indexOf(min),1)
//     return arr;
// }

// console.log(removeSmallest());

//RESEARCH

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// let rentDay = 40;
// function rentalCarCost(d) {

//   return d >= 3 ? ((40*d)-20) : d >= 7 ? ((40*d)-50) : 40*d;

// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// let num = -23;
// function sumDigits(number) {
//   let arr = String(Math.abs(num)).split("");
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
//   }
//   return sum;
// }

// console.log(sumDigits());

//CORRECT BUT UGLY AF COULD BE BETTER I GUESS

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// function addBinary(a,b) {
//   return (a+b).toString(2);
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// let string = 'codewars';
// function shortcut() {
//   return string.replace(/[aeiou]/gi, '')
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// let string = "john McClane";
// function nameShuffler() {
//   return string.split(' ').reverse().join(' ');
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

// function friend(str) {
//   return str.filter(e=>e.length === 4);
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//p0 = 1000  begining
//+= 2% + 50/year
//

// function nbYear(p0, percent, aug, p) {
//   for (var years = 0; p0 < p; years++) {
//   p0 = Math.floor(p0 + p0 * percent/100 + aug)
//   }
//   return years
// }

// console.log(nbYear(1500,5,100,5000));

//INCORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// MATHEMATICSFUNDAMENTALS

// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && b + c > a;
// }

//CORRECT BUT WITH THE HELP OF CHAT GPT, THIS ITS NOT VALID

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
// let bi = [1, 1, 1, 1];

// const binaryArrayToNumber = (num) => {
//   let sum = 0;

//     for (let i = 0; i < num.length; i++) {
//        sum += +num[i] * 2 ** (num.length - 1 - i);
//     }
//     return sum;
// };

// console.log(binaryArrayToNumber(bi.join('')));

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

// function reverse(string){
//   return string.split(' ').reverse().join(' ')
// }
// console.log(reverse('Hello World.'));

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let s = 'aaaa aaa aa aaaaa'
// function findShort(s) {
//   let arr = s.split(' ');
//   let shortest = 1000;
//   for (let i = 0; i < arr.length; i++) {
//         if(arr[i].length < shortest) shortest = arr[i].length
//   }
//   return arr.filter(e => e.length == shortest)
// }

// console.log(findShort());

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
// let arr = [1, 2, 3, 4]
// function index(array, n) {
//   return array[n] ? Math.pow(array[n] ,n) : -1
// }

// console.log(index(arr, 2));

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

// function plural(n) {
//     return n != 1;
// }

//COORECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.

// Examples:(Input --> Output)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n) {
//     debugger
//     if (n==0) return (Math.round(n * 100) / 100).toFixed(2);;

//     let divisor = 1;
//     let result = 1;
//     for (let i = 1; i < n; i++) {
//         divisor += 3
//         result += 1/divisor
//     }
//     return (Math.round(result * 100) / 100).toFixed(2);
// }

//COORECTO COULD BE BETTER

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// function peopleWithAgeDrink(old) {
//     return old <= 14 ? "drink toddy" : old < 18 ? "drink coke" : old < 21 ? "drink beer" : "drink whisky";
// }
// console.log(peopleWithAgeDrink(13));
// console.log(peopleWithAgeDrink(17));
// console.log(peopleWithAgeDrink(18));
// console.log(peopleWithAgeDrink(20));
// console.log(peopleWithAgeDrink(30));

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications
// const numbers = [1, 9, 3, 1, 7, 4, 6, 6, 7]
// let arr;

// function minValue(values){
//     return Number([...new Set(values)].sort(function(a, b) {return a - b;}).join(''));
// }

// console.log(minValue(numbers));

//CORRECT CLEVER!

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

// function diamond(n){
//     if (n<=0 || n % 2 ==0) return null;

//     for (let i = 0; i < n; i++) {

//     }
// }
// let arr = [n,n,n];
// console.log();

//COULDNT DO IT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// const dna = "ATTAC"
// const dna2 = "GTAT"

// function DNAStrand(){
//     let arr = dna.split('');
//         debugger
//         if(arr[i]=="A") arr[i] = "T";
//         if(arr[i]=="T") arr[i] = "A";
//         if(arr[i]=="C") arr[i] = "G";
//         if(arr[i]=="G") arr[i] = "C";

//     return arr;
// }

//COULDNT DO IT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

// const sequenceSum = (begin, end, step) => {
//     if (begin > end) {
//         return 0;
//       }
//       return begin + sequenceSum(begin + step, end, step);
// };

// console.log(sequenceSum(2,6,2));

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

// function checkExam(array1, array2) {
//     debugger
//     let sum = 0;
//     for (let i = 0; i < array1.length; i++) {
//         if(array1[i] == array2[i]) sum += 4;
//         if((array1[i] != array2[i]) && (array2[i] != '')) sum -= 1;
//         if(array2[i] == '') sum += 0;
//     }
//     return sum < 0 ? 0 : sum
// }

// console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]));

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// function getDivisorsCnt(n){
//     let arr = [];
//     for (let i = 1; i <= n; i++) {
//         n%i==0 ? arr.push(i) : ""
//     }
//     return arr.length;
// }

// console.log(getDivisorsCnt(30));

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fix the function
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num) {
//     return num + 5
//   }

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength (array) {
//     return array.sort(function(a, b){return a.length - b.length})
// };

// console.log(string.sort());

//CORRECTO

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// const uniqueInOrder= iterable =>{
//     return [...iterable].filter((element, index)=> element != iterable[index + 1])
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

// Examples (input -> output)
// * [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
// Happy coding!

// let str_1 = [1,3,5,7,9,11,12];
// let str_2 = [1,2,3,4,5,10,12];

// function mergeArrays(arr1, arr2) {
//     let newArr = [...arr1, ...arr2];
//     return newArr.sort(function(a, b){return a-b}).filter((element, index) => element != newArr[index+1]);
// }

// console.log(mergeArrays(str_1, str_2));

//CORRECT AND VERY CLEVER :D

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
//     return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }

// console.log(new Date(Date.parse("July 9, 2015")));

//CORRECT BUT NOT BY MY SELF :D

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// function distinct(a) {
//     return [...new Set(a)];
//   }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// function removeUrlAnchor(url) {
//   const regex = /#.*/;
//   return url.replace(regex, "");
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// function roundToNext5(n){
//     return Math.ceil(n/5)*5;
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// let arr_1 = [101, 45, 75, 105, 99, 107];

// function smallEnough(){
//     for (let i = 0; i < arr_1.length; i++) {
//         if(arr_1[i] > 107){
//             return false;
//             break
//         }
//     }
//     return true
// }

// console.log(smallEnough());

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.


// var number = function(busStops){
//     debugger
//     let sum= 0;
//     for (let i = 0; i < busStops.length; i++) {
//             sum += busStops[i][0]
//             sum -= busStops[i][1]            
//     }
//     return sum;
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

// // function angle(n) {
// //     return 180 * (n-2)
// }


//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

// function sayHello(name) {
//     return "Hello, "+name
// }

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
// let arr = ["Keep", "Remove", "Keep", "Remove", "Keep"]

// function removeEveryOther(){
//     return arr.filter((element, index) => index % 2 ==0)
// }

// console.log(removeEveryOther());

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)

// let arr = [[1,2,3,4,5],[5,6,7,8,9],[20,21,34,56,100]]

// function sumOfMinimums(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += Math.min(...arr[i]);
//     }
//     return sum;
// }
    
// console.log(sumOfMinimums(arr))

//CORRECT

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
