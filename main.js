//********************__1__****************** */
// var numberOne = +prompt("type your first number");
// var numberTwo = +prompt("type your second number");

// console.log(`number one is ${numberOne}`);
// console.log(`number two is ${numberTwo}`);

// var result = numberOne+numberTwo;

// if(result >= 13){
//     console.log("this is bar mitzva");
// }
// else if(result == 12){
//         console.log("this is bat mitzva");
//     }
// else{
//     console.log("kid");
// }
//********************__1__****************** */





//********************__2__****************** */
// var i=0;
// while(i<100){
//     console.log("yes");
//     i++;
// }

// var userNum = +prompt("enter number");
// var i=0;
// while(i<userNum){
//     console.log("no");
//     i++;
// }
//********************__2__****************** */





//********************__3__****************** */
// for(var i=0; i<1000; i++){
//     console.log(i, "javascript is not java");
// }
//********************__3__****************** */





//********************__4__****************** */
// var userName = prompt("enter your name");
// var userNum = +prompt("enter your number");

// for(var i=0; i<userNum; i++){
//     console.log(i, userName);
// }
//********************__4__****************** */





//********************__5__****************** */
// var userName = prompt("enter name");
// var userEmail = prompt("enter email");
// var userAge = +prompt("enter age");

// console.log(`my name is ${userName}, my email is ${userEmail}, and i am ${userAge} years old.`);

// var anotherNumber = +prompt("enter number");

// if(userAge>18){
//     for(var i=0; i<anotherNumber; i++){
//     console.log(i, `my name is ${userName}.\n my email is ${userEmail}.\n and i am ${userAge} years old.`);
//     }
// }
//********************__5__****************** */





//********************__6__****************** */
// var userNumber = +prompt("enter a number");
// var myName = "marcos";

// for(var i = 0; i < userNumber; i++){
//     var userName = prompt("what is your name?");
//     if(userName == myName){
//         console.log(`hi boss ${myName}`);
//     }
//     else{
//         console.log("no entry");
//     }
// }
//********************__6__****************** */





//********************__7__****************** */
// var userNum1 = +prompt("enter number 1");
// var userNum2 = +prompt("enter number 2");

// for(var i=0; i<=userNum1; i++){
//     for(var j=0; j<=userNum2; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }
//********************__7__****************** */





//********************__8__****************** */
// var numbers = [1,2,3,4,5];
// console.log(numbers);
//********************__8__****************** */





//********************__9__****************** */
// var numbers = [5,6,7,8,9];
// for (var i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }
//********************__9__****************** */





//********************__10__****************** */
// var numbers = [41, 90, 58, 23, 77, 63 ,99, 17];

// for(var i=0; i<numbers.length; i++){
//     if(numbers[i] %2==0 ){
//         console.log(numbers[i])
//     }
// }
//********************__10__****************** */





//********************__11__****************** */
// var fiveNumbersArray = [];
// for(var i=0; i<5; i++){
//     fiveNumbersArray[i] = +prompt("enter a number")
// }
//********************__11__****************** */





//********************__12__****************** */
// var sevenNumbersArray = [];
// for(var i=0; i<7; i++){
//     sevenNumbersArray[i] = +prompt("enter a number")
//     if(sevenNumbersArray[i] % 2 !=0){
//         console.log(sevenNumbersArray[i]);
//     }
// }
//********************__12__****************** */





//********************__13__****************** */
//  var numAndNames = ["aaa", "bbb", 50, "ccc", 100, 65, "ddd", 85, "eee", 100];

//  for(var i=0; i<numAndNames.length; i++){
//      if(numAndNames[i]*0!=0){
//         numAndNames[i] = "not_number";
//     }
// }
// console.log(numAndNames);
//********************__13__****************** */





//********************__14__****************** */
// var numbers = [];
// var i=0;
// while (i<10) {
//     var numFromUser = Number(prompt("enter a number"));
//     if(numFromUser%2==0){
//         numbers [i] = numFromUser;
//         i++;
//     }
// }
//********************__14__****************** */





//********************__15__****************** */
// var userWidth = +prompt("enter width");
// var userHeight = +prompt("enter height");
// var sunSquare = userWidth*userHeight;


// var numOne = +prompt("enter number 1");
// var numTwo = +prompt("enter number 2");
// var numThree = +prompt("enter number 3");


// if(numOne > numTwo && numTwo > numThree){
//     console.log("going down");
// }
// else if(numOne < numTwo && numTwo < numThree){
//     console.log("going up");
// }
// else{
//     console.log("no order");
// }
//********************__15__****************** */





//********************__16__****************** */
// var posNumFromUser = +prompt("enter a number");
// var numArray = [];
// for(var i=0; i<posNumFromUser.toString().length;i++){
//     if(posNumFromUser > 0){
//         numArray[i] = posNumFromUser.toString().charAt(i);
//         console.log(numArray[i]);
//     }
// }
//********************__16__****************** */
