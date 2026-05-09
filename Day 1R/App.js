// 1.) Variable :- Variable is Data storage location . Where we store data
// Eg:- age = 19; , height = 5`3;

//Types of Varible : 3 (Var , let , const)
// a) let:- 
// eg: 1) let a 5;(/)      2) let a = 10(*)     3) a = 11(/)


// b) const
// eg:- 1) const a = 5;    2) const a = 12(*)     3) a = 32(*)


// c) var :-
// eg:- 1) var a = 6;(/)     2) var a = 14(/)     3) a = 37  (/)





//2) Data types in JS :- There are many types of Data types in Js

//a) Numbers :- 1,2,3,4,5,6;
//b) Boolean :- True / False
//c)String:- Name ("sohrab")
//d)Undefine:- let x;
//e)Bigint :- 123456789465532145964(Huge No)
//f) Symbol:- Spcial characters and symbols



//3.) Numbers in Data types (JS)

//a)Positive & Negative No ( a=7, b=-2)
//b)Integers (5,-3)
//c)Float no (5.312 , 9.12)  Points NO



//4.) Operations in JS
a = 14;
b = 3;

// (a) Addition(+)
sum = a+b;

// (b) Subtraction(-)
diff = a-b;

//(c) Multiplication(*)
mul = a*b;

//(d) Division(/)
div = a/b;

//(e) Reminder(%)
rem = a%b;

//(f) Exponentiation (Power Operator)(x**n)
power = 5**3;

//(g) NaN [Not a Number]
0/0;
NaN-4;
NaN+5;
NaN*3;
//All above operations will give us NaN as output because NaN is not a number and any operation with NaN will give us NaN as output.


//5.) Operators in Precidence 
//a) ()  :- First of all we solve Brackets
//b) **  :- Then we solve Exponentiation
//c) * , / , % :- Then we solve Multiplication , Division and Reminder
//d) + , - :- Then we solve Addition and Subtraction
//Eg:- 5 + 3 * 2 ** 2 - (4 + 6) = ?
//Step 1:- 5 + 3 * 4 - (4 + 6) = ?
//Step 2:- 5 + 12 - (4 + 6) = ?
//Step 3:- 5 + 12 - 10 = ?
//Step 4:- 17 - 10 = ?
//Step 5:- 7 = ?
//Answer :- 7



// 6.) Practice Questions :-
//QS1:- What will be the output of the following code?
let age = 23;
age+2; //After 2 years my age will be 25

//QS2:- What will be the output(avg) of the following code?
let hindi = 85;
let english = 90;
let math = 95;
let avg = (hindi + english + math) / 3; //Average marks will be 90


//7.) Assignment operators in JS
let age1 = 20;

age1 += 5; // age1 = age1 + 5; (age1 will be 25)

age1 -= 3; // age1 = age1 - 3; (age1 will be 22)
age1 *= 2; // age1 = age1 * 2; (age1 will be 44)
age1 /= 4; // age1 = age1 / 4; (age1 will be 11)
age1 %= 3; // age1 = age1 % 3; (age1 will be 2)
age1 **= 2; // age1 = age1 ** 2; (age1 will be 4)



//8.) unary operators in JS
let x = 5;
x++; // x = x + 1; (x will be 6)  //Post Increment
++x; // x = x + 1; (x will be 7)  //Pre Increment 

x--; // x = x - 1; (x will be 5)  //Post Decrement
--x; // x = x - 1; (x will be 4)  //Pre Decrement



//9.) Pratice Questions :-
//QS1:- What will be the output of the following code?
let num =6;

let Newnum = ++num;
Newnum =++num;  //Output will be 7 because we are using Pre Increment operator and it will first increment the value of num and then assign it to Newnum.





//10.) Idenfiers in JS :- Identifiers are the names we give to variables, functions, and other entities in our code. They are used to identify and access these entities.

//Rules for naming identifiers in JS:
//1) Identifiers must start with a letter, underscore (_), or dollar sign ($).
//2) Identifiers can contain letters, digits, underscores, and dollar signs.
//3) Identifiers cannot be a reserved keyword in JavaScript (e.g., var, let, const, if, else, etc.).
//4) Identifiers are case-sensitive (e.g., myVariable and myvariable are different identifiers).



//11.) JS naming conventions :- Naming conventions are a set of rules and guidelines for naming variables, functions, and other entities in programming. They help improve code readability and maintainability by providing a consistent way to name things in our code.

//Some common naming conventions in JavaScript include:
//  a.)CamelCase in JS :- Camel case is a naming convention in which the first letter of each word is capitalized except for the first word. It is commonly used for naming variables and functions in JavaScript.
//Example of camelCase:
let newName = "Hello World";

//b.) snake-case in JS :- snake_case is a naming convention in which words are separated by underscores (_). It is commonly used for naming variables and functions in JavaScript.
//Example of snake_case:
let new_name = "Hello World";    

// c.) Pascal Case in JS :- Pascal case is a naming convention in which the first letter of each word is capitalized. It is commonly used for naming classes and constructors in JavaScript.
//Example of pascal case:
let NewName = "Hello World";    //Pascal case is same as camel case but in pascal case the first letter of the first word is also capitalized.

//Note:- In JS we generally use camel case for naming variables and functions, and pascal case for naming classes and constructors. However, the choice of naming convention can vary based on personal preference or project guidelines.

 

//12.) Boolean in JS :- Boolean is a data type that can have only two values: true or false. It is used to represent logical values and is often used in conditional statements and loops to control the flow of the program.

//Example of boolean in JS:
let agee = 13;
let isAdult = agee >= 18; // isAdult will be false because age is less than 18   

let agee1 = 20;
let isAdult1 = agee1 >= 18; // isAdult1 will be true because age1 is greater than or equal to 18
typeof isAdult; // Output will be "boolean" because isAdult is a boolean data type
typeof isAdult1; // Output will be "boolean" because isAdult1 is a boolean data type



//13.) What is TypeScript :- TypeScript is a superset of JavaScript that adds static typing to the language. It was developed by Microsoft and is designed to help developers catch errors early in the development process and improve code maintainability. TypeScript allows developers to define types for variables, function parameters, and return values, which can help prevent common programming errors and improve code readability. TypeScript code is transpiled into JavaScript, which can be run in any environment that supports JavaScript.
// in JS let a = 5; // a is a number
// & let a = true; // a is a boolean

//while in TypeScript if  a = 5; // a is a number
// & if a = true; // a is a boolean (*) TypeScript will give us an error because we have not defined the type of variable a. In TypeScript we need to define the type of variable a like this: let a: number = 5; // a is a number



//14.) Practice Questions :-
//QS1:- What will be the output of the following code?
// let 1age = 25; // Output will be an error because variable name cannot start with a number in JavaScript. Variable names must start with a letter, underscore (_), or dollar sign ($).
// it will written like let age1 = 25; // Output will be 25 because variable name is valid and it starts with a letter.

//QS2:- What will be the output of the following code?
let marks = 75;
// let isPass = True;  // Output will be an error because True is not a valid boolean value in JavaScript. In JavaScript, boolean values are case-sensitive and should be written in lowercase as true or false. So the correct code should be: let isPass = true; // Output will be true because we have assigned a boolean value to isPass variable.

let isPasss = 'true'; // Output will be "true" because we have assigned a string value to isPass variable. In JavaScript, we can assign any type of value to a variable without defining its type. However, it is generally recommended to use consistent data types for variables to avoid confusion and improve code readability.




//15.) Strings in JS :- A string is a sequence of characters enclosed in single quotes (' '), double quotes (" "), or backticks (` `) in JavaScript. Strings are used to represent text and can contain letters, numbers, symbols, and whitespace.
//Example of strings in JS:
let name = "Sohrab";
let greeting = 'Hello';
let namme = `Sohrab`; // Output will be "Sohrab" because we have assigned a string value to the variable namme. In JavaScript, we can use single quotes, double quotes, or backticks to define strings, and they all work the same way. However, it is generally recommended to use consistent quotation marks for strings in your code to improve readability and maintainability.
let char = `A`;
let char1 = "A"
let numb = "123"; // Output will be "123" because we have assigned a string value to the variable num. In JavaScript, we can assign any type of value to a variable without defining its type. However, it is generally recommended to use consistent data types for variables to avoid confusion and improve code readability.
let num1 = '123'; // Output will be "123" because we have assigned a string value to the variable num1. In JavaScript, we can assign any type of value to a variable without defining its type. However, it is generally recommended to use consistent data types for variables to avoid confusion and improve code readability.
let empty = ""; // Output will be an empty string because we have assigned an empty string value to the variable empty. An empty string is a string that contains no characters and has a length of 0. It is often used to represent the absence of a value or to initialize a variable that will later be assigned a string value.
let empty1 = ''; // Output will be an empty string because we have assigned an empty string value to the variable empty1. An empty string is a string that contains no characters and has a length of 0. It is often used to represent the absence of a value or to initialize a variable that will later be assigned a string value.
let empty2 = ``; // Output will be an empty string because we have assigned an empty string value to the variable empty2. An empty string is a string that contains no characters and has a length of 0. It is often used to represent the absence of a value or to initialize a variable that will later be assigned a string value.




//16.) String indices in JS :- In JavaScript, strings are zero-indexed, which means that the first character of a string is at index 0, the second character is at index 1, and so on. We can access individual characters of a string using their indices.
//Example of string indices in JS:
let str = "Hello";
str[0]; // Output will be "H" because we are accessing the character at index 0.
str[1]; // Output will be "e" because we are accessing the character at index 1.
str[2]; // Output will be "l" because we are accessing the character at index 2.
str[3]; // Output will be "l" because we are accessing the character at index 3.
str[4]; // Output will be "o" because we are accessing the character at index 4.


//Note :- If we want to know the length of a string, we can use the length property of the string. For example:
str.length; // Output will be 5 because the string "Hello" has 5 characters. The length property returns the number of characters in a string, including spaces and special characters.

// for example:
str.length; // Output will be 5 because the string "Hello" has 5 characters. The length property returns the number of characters in a string, including spaces and special characters.
str.length - 1; // Output will be 4 because the last character of the string "Hello" is at index 4. Since the length of the string is 5, the last index is length - 1, which is 4.
str[str.length - 1]; // Output will be "o" because we are accessing the last character of the string "Hello" using its index, which is length - 1 (4 in this case).

let firstName = "Sohrab";
let lastName = "Ali";
let fullName = firstName + " " + lastName; // Output will be "Sohrab Ali" because we are concatenating the firstName and lastName variables with a space in between using the + operator. In JavaScript, we can use the + operator to concatenate strings, which means to combine them into a single string.



// 16.) Null & Undefined in JS :- In JavaScript, null and undefined are two distinct values that represent the absence of a value or the lack of a value.
//a) Null :- Null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property is intentionally left empty. For example:
let myVar = null; // Output will be null because we have assigned the value null to the variable myVar. Null is a primitive value that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property is intentionally left empty.        

//b) Undefined :- Undefined is a primitive value that represents the absence of a value or the lack of a value. It is often used to indicate that a variable has been declared but has not been assigned a value, or that a function does not return a value. For example:
let myVar1; // Output will be undefined because we have declared the variable myVar1 but have not assigned it a value. In JavaScript, when a variable is declared but not assigned a value, it is automatically assigned the value undefined. This indicates that the variable exists but does not currently hold any meaningful value.



//17.) Practice Questions :-
//QS1:- Declare your name as a string and print its length.
let myName = "Sohrab";
console.log(myName); // Output will be "Sohrab" because we have assigned the string value "Sohrab" to the variable myName and then printed it using console.log() function.
console.log(myName.length); // Output will be 6 because the string "Sohrab" has 6 characters. The length property returns the number of characters in a string, including spaces and special characters.

//QS2:- Declare your first name as a string and print its first chareacter.
// let firstName = "Sohrab";
console.log(firstName); // Output will be "Sohrab" because we have assigned the string value "Sohrab" to the variable firstName and then printed it using console.log() function.
console.log(firstName[0]); // Output will be "S" because we are accessing the character at index 0 of the string "Sohrab". In JavaScript, strings are zero-indexed, which means that the first character of a string is at index 0, the second character is at index 1, and so on.

//QS3:- Declare your name as a string and print its last character.
// let lastName = "Ali";
console.log(lastName); // Output will be "Ali" because we have assigned the string value "Ali" to the variable lastName and then printed it using console.log() function.
console.log(lastName[lastName.length-1]); // Output will be "i" because we are accessing the last character of the string "Ali" using its index, which is length - 1 (2 in this case). In JavaScript, strings are zero-indexed, which means that the first character of a string is at index 0, the second character is at index 1, and so on. Therefore, the last character of a string can be accessed using the index length - 1.

//QS4:- What is output of following code?
"apnacollege"+123; // Output will be "apnacollege123" because we are concatenating the string "apnacollege" with the number 123 using the + operator. In JavaScript, when we use the + operator with a string and a number, the number is converted to a string and then concatenated with the other string. Therefore, the result is a new string that combines both values.
console.log("apnacollege"+123); // Output will be "apnacollege123" because we are printing the string "apnacollege123" using console.log() function. In this case, we are not concatenating the string with the number, but rather printing the entire string as it is. Therefore, the output will include the + operator and the number as part of the string.

//QS5:- What are the lengths of an empty string & string with a single space?
let emptySpace = " "; // Output will be " " because we have assigned a string with a single space to the variable emptySpace and then printed it using console.log() function.
console.log(emptySpace.length); // Output will be 1 because the string " " has 1 character, which is a single space. The length property returns the number of characters in a string, including spaces and special characters.


