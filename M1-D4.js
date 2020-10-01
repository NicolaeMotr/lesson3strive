/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (l1, l2) => l1 * l2;

console.log(area(7000, 200));



/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum (a, b) {
                    if (a === b) {
                                        return (a +b) *3;
                    }
}
console.log(crazySum(3, 3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff (value) {
                    let absoluteValue = value;
                    if (absoluteValue < 0) {
                                     absoluteValue = absoluteValue * -1;
                    }
                    
                    if (absoluteValue > 19) {
                                        return (absoluteValue - 19) * 3;
                    }
}
console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(N) {
                    if( (N >= 20 && N <= 100) || N == 400 ) {
                                        return true;
                    }
                    return false;
}
console.log(boundary(400));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, 
if the given string begins with "Strive" then return the original string.
*/

function stravify(S) {
                    if (S.match('Strive')) {
                                        return "Strive" + S;
                    } 
                    return S;
}
console.log(stravify('Strive Ciao'));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(operator) {
                    if (S.match('Strive')) {
                                        return "Strive" + S;
                    }
                    return S;
}

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(str) {
                    return str.split("").reverse().join("");
}

console.log(reverseString("strive"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/
/*
const upperFirst = (s) => {
                    if (typeof s !== 'string') return ''
                    return s.charAt(0).toUpperCase() + s.slice(1)
}
console.log(upperFirst("strive"))
*/
// or

function upperFirst(string) {
                    return string.charAt(0).toUpperCase() + s.slice(1)
}
console.log(upperFirst("strive"))


/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/

