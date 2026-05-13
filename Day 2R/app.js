//1.) Template Literals:- 
let penPrice = 10;
let noteBookPrice = 200;
console.log("The Total price is" , penPrice+noteBookPrice , "Rupees.");
//Using Template Literals
console.log(`The total price is ${penPrice+noteBookPrice} Rupees.`);



//2.) Operators in JS:-
//a.)Arithmetic Operators:- (+ , - , * , / , % , **)
let a = 10;
let b = 20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//b.) Unary Operators:- (++, --)
let c = 10;
console.log(c++);
console.log(c--);
console.log(++c);
console.log(--c);

//c.) Assignment Operators:- (= , += , -= , *= , /= , %=)
let d=10;
d += 5;
console.log(d);
d -= 5;
console.log(d); 
d *= 5;
console.log(d);
d /= 5;
console.log(d);
d %= 5;
console.log(d);


//d.) Comparison Operators:- (== , === , != , !== , > , < , >= , <=)
let age = 23;
console.log(age>18); //true
console.log(age>=18); //true
console.log(age<18); //false
console.log(age<=18); //false

//Note:- (==) is used for value comparison and (===) is used for value and type comparison.
console.log(age==23); //true
console.log(age!=22); //true
console.log(age!=23) //false
console.log(5=="5"); //true .Because (==) only compares values and ignores types. So, 5 and "5" are considered equal.

//Note:- (=) is used for assignment and (==) is used for value comparison.
console.log(age=23); //This will assign the value 23 to age and return 23. So, it will print 23.

//Note:- (===) is used for value and type comparison.
console.log(age===23); //true
console.log(age==="23"); //false .Because age is number and "23" is string. So, they are not same type.
console.log(5==="5"); //false .Because 5 is number and "5" is string. So, they are not same type.


//3.) Conditional Statements:-
//a.) if statement:-
// let age = 23;
if(age>=21){
    console.log("You are able to Marriage.(Boys)"); // In if statement if your condition is true then it print which is in console.log() , otherwise it will not print anything.
    // if our condition is false then it will not print anything. Either our other codes will write  after it condition
}

//eg2:-
if(age<=14){ //Here no any sentence is printed because our 1st condition is false. So, it will not print anything.
    console.log("You are not able to marriage.");
    console.log(8*5);
    console.log(7+5+6);
}
//b.) if else statement:-
let Marks = 45;
if(Marks>=30){
    console.log("Pass.");
} else{
    console.log("Fail.");
}

//c.) conditional statement:-
let firstname = "Sarim";
if(firstname=="Sarim"){
    console.log(`Hey there here is ${firstname}`);
}



//4.)Practice Questions:-
//1.) Create a trafic light system that shows what to do when the light is red, yellow and green.

let signal = "Yellow";
console.log(`Be careful & Follow the traffic rules.`);
if (signal == "Red"){
    console.log("Stop.");
} else if(signal== "Yellow"){
    console.log("Get Ready.");
}else if(signal=="Green"){
    console.log("Go.");
} else{
    console.log("Traffic light is not working.");
}


// // By the use of only if statement:-
let light = "yellow";
if(light==="red"){
    console.log("Stop.");
}

if(light==="yellow"){
    console.log("Get Ready.");
}

if(light==="green"){
    console.log("Go.");
}

// //Note:- You know that JS is case sensitive language. So, if we write "Red" instead of "red" then it will not print anything because our condition is false. So, we have to write exactly same as we have defined in our condition. Otherwise it will not print anything.


// // Note:- if statement ka use ham bahut sare value pane k liye kar sakte hai. Jaise ki
let ExamMarks = 75;
if(ExamMarks>=30){
    console.log("Pass.");
}
if(ExamMarks>60){
    console.log("Good");
}
if(ExamMarks>80){
    console.log("Excellent.");
}
// // Ab Yaha "Pass" k sath sath Good v print karega Kyu ki O pass v  hai or score good v kiya hai. Yaha ye ExamMarks>50 v check kiya hoga jab o correct nahi hoga to print nahi kiya hoga.


// // Ab yahi same code ham if else statement k sath likhte hai to hamara code kuch is tarah se hoga:-
let examMarks = 95;
if (examMarks>=30){
    console.log("Pass.");
} else if (examMarks>60){
    console.log("Good.");
} else if (examMarks>80){
    console.log("Excellent.");
}
// // Ab yahi dekh lijiye yaha o "Pass" v hai , "Good" v hai or Sath hi sath "Excellent" v hai. Lekin Ye check kiya jaha isko sahi value mil gaya ye us k aage kya likha hai check v nah kiya.



//5.) Practice Questions:-
//QS.) Create a system to calculate popcorn price based on the size customer asked for.
// if size 'XL' then price is RS. 250
// if size 'L' then price is RS. 200
// if size 'M' then price is RS. 100
// if size 'S' then price is RS. 50

let popcornSize = "L";
if(popcornSize==="XL"){
    console.log("Price is RS 250");
} else if(popcornSize ==="L"){
    console.log("Price is RS 200");
} else if(popcornSize ==="M"){
    console.log("Price is RS 100");
} else if(popcornSize ==="S"){
    console.log("Price is RS 50");
} else {
    console.log("Thanks for visiting our shop.");
}


//6.)Nested if else:- When we put another condition in "if" statement then it is known as nested if else. 
//Nested if else:- Jab if k andar hi koi condition de diya jata hai to hi use Nested if else kaha jata hai

let marks = 83;
if (marks>=30){
    console.log("Congratulation You are Pass");
    if(marks>=80){
        console.log("A+");
    } else if(marks>=60){
        console.log("A");
    } else{
        console.log("B");
    }
} else{
    console.log("Sorry! You are Fail");
}


//7.)Logical Operators :-
//(1)  AND (&) Operator
// (1) true & true = true (2) true & false = (false) (3) false & true = (false) (4) false & false = (false)
 let Mrk = 92;
 if(Mrk>=33 & Mrk>=80){
    console.log("Sucessfully Pass");// yaha pe Mrk >=33 & 80 me se koi ek v condition fail ho gaya to o Koi print nahi karega direct "Fail" print kar denga . 
    console.log("A+");   // Yaha dono print hoga or tab hi jab dono condition sucess ho tab.
 } else {
    console.log("Sorry You are Fail");
 }

//(2)OR(||) Operators:-
//(1) true || true = (true) (2) true || false = true  (3) false || true = true (4) false || false = false

let Mrks =34;
if(Mrks>=30 || Mrks>=75){  // Yaha dono me se koi v condition success ho jaye to code run ho jayega or Print kar denga.
    console.log("Sucessfully Pass");
    console.log("You have got A+");
} else {
    console.log("Sorry You're Fail");
}

//(2) NOT (!):- It always reverse the result(if result is true then it print false , if result if false then it print true)
// !true = false , !false = true

let value = 75;
if((value<=90 & value >=60) || !false){  // !false ==true , !true == false
    console.log("Great achivement");
} else{
    console.log("Pass");
}



//8.)Pratice Questions:-
//Qs:- A "good string" is a string that starts with the letters 'a' & has a length >3 . Write a program to find if a string is good or not.

let str = "apple";
if(str[0]=="a" & str.length>=3){
    console.log("Good str");
} else ("Not Good str");


//Qs:- Predict the output of following code:
let num = 12;
if((num%3===0) &(num+1==15) || (num-1==11)){
    console.log("Safe"); // it give "safe" because & conditon are false but || condition are true(one is true and one is false so result = true) So, it print "Safe";
} else {
    console.log("Unsafe");
}


//9.)Truthy and Falsy value:-
if(false){
    console.log("This value is true");
} else{
    console.log("This value is false");
}


if(true){
    console.log("This is false value");
} else{
    console.log("This is true value");
}
// // agr ham if me true likhate hai to hamesha upper wala value hi print hoga. Or agar ham false likhate hai to Hamesha niche(else) wala print hoga.
// //Note:- Some false value , false , 0, -0 , 0n(0 to the power n), ""(Empty value), Null , Nan , Undefined.
// // For example:-

if(0n){
    console.log("True value");
} else {
    console.log("False value");
}


//10.) Switch statement:- Switch statement ka use tab hi hota hai jab bahut sare statements ho us me se ek condition true hone pe print karana ho or us k bad ohi break lag jaye.
let day =5;

switch (day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
//Note:- Yaha pe har ek statement check karega jaha o satisfy ho jayega ohi pe break le lega aage check hi nahi karega.
    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    default:
        console.log("Sunday");
//Note:- Ab agar yaha pe default me koi aisa case de dega jo satisfy hi nahi karta ho to o value agree nahi karega to result me default value de dega jaise ki "Sunday".
// Agr hame break nahi lagate hai to aage case satisfy kare ya na kare pr o sab print kar dega.
}

// Another Example.
let color = "red";

switch (color){
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get ready");
        break;
    
    case "green":
        console.log("Let's Go.");
        break;

    default:
        console.log("Light not working properly");
}

// 11.) Pratice QS.
// Use switch statements to print the day of the week using a number variable 'day' with values 1 to 7.

let Wday = 1;

switch(Wday) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;
    
    default:
        console.log("Sunday");
}


// //12.) Alert:- Alert is use for give aware to users
// alert("Be aware >> Danger");


// //13.) Error:- Error is use for print error (Just like console) for users.
// console.log("Hey there!");
// console.error("Here is some errors ..");


// //14.) Warn:- Warn is actual warning . It is use for give warning for user.
// console.warn("Be aware...");


// //15.) Prompt :- Prompt is use for write our message when user open website.
// let Roll = prompt("Enter your Roll No: ");
// console.log("Roll no: ",Roll);



// //Write firstName and lastName and add both using console.
// let firstName = prompt("Enter Your first Name");
// let lastName = prompt("Enter Your last Name");
// console.log(`Here is full Name.. ${firstName +" "+ lastName}`);
// // console.log("Welcome " , firstName ," " , lastName ,"!");



//Assignment 
//1.) Create a number variable run with some value.
// Now print "good" if the number is divisible by 10.

let numm = 53;
if(numm%10==0){
    console.log("good");
}else{
    console.log("Sorry! It is not divisible by 10");
}



//2.) Take the user's name & age as input using prompts.
//Then return back the following statement to the user as an alert  (by substuiting their name & age)
// name is age years old.(Here name = Soharb, age = 21);

let usersName = prompt("Enter Your name here..");
let Age = prompt("Enter your Age..");
alert(`${usersName} is ${Age} years old`);
// [Use the template literals to print this sentence.]



//[Use the number as the case value in switch]
//3.) Write the switch statement to print the months in a quarter.
// a) Months in Quarter 1: January , February , March
// b) Months in Quarter 2: April , May , June
// c) Months in Quarter 3: July , August , September
// d) Months in Quarter 4: October , November, December

let quarterMonths = 3;

switch(quarterMonths){
    case 1:
        console.log("January , February , March");
        break;

    case 2:
        console.log("March , April , May");
        break;

    case 3:
        console.log("July , August , September");
        break;

    case 4:
        console.log("October , November , December");
        break;

    default:
        console.log("You have not choose Correct months.");
}


// 4.) A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.
//   For a given string print if it is golden or not.

let string = "apple";
if((string[0]==="a" || string[0]==="A") & string.length>=5){
    console.log("Golden");
}else{
    console.log("Not Golden");
}


// 5.) Write a program to find the largest of 3 numbers.

let x = 1245;
let y = 56;
let z = 458;

if(x>y){
    if(x>z){
        console.log(x ,"is greatest");
    }else{
        console.log(z ,"is greatest");
    }
}else{
    if(y>z){
        console.log(y ,"is greatest");
    }else{
        console.log(z ,"is geatest");
    }
}



// 6.) (Bonus). Write a program to check if 2 numbers have the same last digit.
//  Eg:- 32 and 47852 have the same last digit(2).
let m = 32;
let n = 452;
if((m%10==2) & (n%10==2)){
    console.log("Same last value");
} else{
    console.log("Both are diff..");
}

// or
// it is also been some code for finding same last digit.
let p = 33;
let q = 64;
if(p%10===q%10){
    console.log("Same last digit.");
} else{
    console.log("Diff last digit.");
}