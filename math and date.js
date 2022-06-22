// question 1
// document.write(`<h1>Question 1</h1>`);
// var num = prompt("enter a positiuve integer");
// var num1 = Number(num);
// var roundnum = Math.round(num1);
// var floornum = Math.floor(num1);
// var ceilnum = Math.ceil(num1);
// document.write(`Number : ${num1}</br> Round off value: ${roundnum} </br> floor value ${floornum}</br> ceil value: ${ceilnum} </br>`)

// question2
// document.write(`<h1>Question 2</h1>`);
// var negNum = prompt("enter a negative integer");
// var negnum1 = Number(negNum);
// var roundnegnum = Math.round(negnum1);
// var floornegnum = Math.floor(negnum1);
// var ceilnegnum = Math.ceil(negnum1);
// document.write(`Number : ${negnum1}</br> Round off value: ${roundnegnum} </br> floor value ${floornegnum}</br> ceil value: ${ceilnegnum} </br>`)

// question3
// document.write(`<h1>Question 3</h1>`);
// var floatNum = prompt("enter a positive floating integer");
// var floatNum1 = Number(floatNum);
// var roundfloatnum = Math.round(floatNum1);
// var floorfloatnum = Math.floor(floatNum1);
// var ceilfloatnum = Math.ceil(floatNum1);
// document.write(`Number : ${floatNum1}</br> Round off value: ${roundfloatnum} </br> floor value ${floorfloatnum}</br> ceil value: ${ceilfloatnum} </br>`)

// question4
// document.write(`<h1>Question 4</h1>`);
// var nfloatNum = prompt("enter a negative positive floating integer");
// var nfloatNum1 = Number(nfloatNum);
// var nroundfloatnum = Math.round(nfloatNum1);
// var nfloorfloatnum = Math.floor(nfloatNum1);
// var nceilfloatnum = Math.ceil(nfloatNum1);
// document.write(`Number : ${nfloatNum1}</br> Round off value: ${nroundfloatnum} </br> floor value ${nfloorfloatnum}</br> ceil value: ${nceilfloatnum} </br>`)

// question5
// document.write(`<h1>Question 5</h1>`);
// var abs = prompt("enter a number");
// var absnum = Number(abs);
// var absolute = Math.abs(absnum);
// document.write(`Number : ${abs}</br> absolute value: ${absolute} </br> `)

//question6
// document.write(`<h1>Question 6</h1>`);
// var dice1 = Math.floor( Math.random() * 7) + 1;
// document.write(`random dice number: ${dice1}`);

//question7
// document.write(`<h1>Question 7</h1>`);
// var dice2 = Math.floor( Math.random() * 2) + 1;
// if(dice2 == 2){
//     document.write(`random coin value is Head`)
// }else{
//     document.write(`random coin value is Tail`)
// }

//question8
// document.write(`<h1>Question 8</h1>`);
// var randomNumber = Math.floor( Math.random() * 100) + 1;
// document.write(`random number between 1-100 = ${randomNumber}`)

//question10
// document.write(`<h1>Question 10</h1>`);
// var guessNum = Math.floor( Math.random() * 10) ;
// var usernum = prompt("guess a number");
// var userNum1 = Number(usernum);
// if(guessNum == userNum1){
//     document.write(`Great! you guess it right`);
// }else{
//     document.write(`try again`);
// }
// console.log(guessNum)

//question11
// document.write(`<h1>Question 11</h1>`);
// var date = new Date()
// document.write(date)

//question12
document.write(`<h1>Question 12</h1>`);
var d = new Date()
var month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.write(`Current month is : ${month[d.getMonth()]}`)

//question13
document.write(`<h1>Question 13</h1>`);
var d1 = new Date()
var day =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.write(`Today is : ${day[d1.getDay()]}`)

//question14
document.write(`<h1>Question 14</h1>`);
var d2 = new Date()
var day =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
if(day[d2.getDay()] == 'Sat' || day[d2.getDay()] == 'Sun'){
    document.write(`its fun day`)
}else{
    document.write(`its working day`)
}