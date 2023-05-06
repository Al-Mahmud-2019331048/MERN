"use strict";

// let hasDriversLiscense = false;
// const passTest=true;
// if(passTest) hasDriversLiscense=true;
// if(hasDriversLiscense) console.log('I can drive');
// const interface='Audio';

// functions
// // 1
// function logger(){
//     console.log('Mahmud');
// }

// logger();
// logger();

// 2
// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));
// console.log(fruitProcessor(5,5));
// Number('25');  //build in function

// // function declearation
// // can invoke before declearation
// console.log(calculateAge1(2000));
// function calculateAge1(birthYear){
//     return 2023-birthYear;
// }

// // anonimous function
// // function experssion
// const calculateAge2=function (birthYear){
//     return 2023-birthYear;
// }
// console.log(calculateAge2(2002));

// // arrow function
// const calculateAge3=birthYear=> 2023-birthYear;

// console.log(calculateAge3(2001));

// const yearUntilRetirement=(birthYear,firstName) => {
//     const age=2023-birthYear;
//     const retirement=65-age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearUntilRetirement(2002,'Mahmud'));

// function cutFruitPieces(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples,oranges){
//     const applePieces=cutFruitPieces(apples);
//     const orangepieces=cutFruitPieces(oranges);
//     const juice=`Juice with ${applePieces} pieces of apple and ${orangepieces} pieces of orange`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));

// array
// let friends=['BM','Abdulla','Al'];
// console.log(friends);
// const years=new Array(2000,2001,2002);
// console.log(years);

// console.log(friends[0]);
// console.log(friends.length);
// friends[2]='Alim';
// console.log(friends);
// friends=['BM','Adil','Mahim'];
// const firstName='Jonas';
// const jonas=[firstName,'CSE',2021,'SUST',friends];
// console.log(jonas);

// let friends=['BM','Adil','Mahi'];
// // add in last, return removed element
// let newLen=friends.push('Sadman');
// console.log(friends,newLen);
// // add in first
// friends.unshift('Mahin');
// console.log(friends);
// //return removed element
// friends.pop(); // remove from last
// console.log(friends);
// friends.shift();  //remove form first
// console.log(friends);
// console.log(friends.indexOf('BM'));

// coding challanges 2
// function calcTip(bill){
//     return bill>=50 && bill<=300 ? bill*.15 : bill*.2;
// }

// const bills=[125,555,44];
// const tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const totals=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]]
// console.log(bills,tips,totals);

// objects
// const jonas={
//     firstName: 'BM',
//     lastName: 'Mahmud',
//     age:2023-2002,
//     job:'Teacher',
//     friends:['Sakib','Sadman','Nahid']
// };
// console.log(jonas);
// //accessing elements of object
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// const nameKey='Name';
// console.log(jonas['first'+nameKey]);
// console.log(jonas['last'+nameKey]);

// // const interested=prompt('What do you want to know?');
// // if(jonas[interested]) console.log(jonas[interested]);

// jonas.location='Bangladesh';
// jonas['email']='jonas222@gmail.com';
// console.log(jonas);

// const jonas={
//     firstName: 'BM',
//     lastName: 'Mahmud',
//     birthYear:2002,
//     hasDriverLiscense: false,
//     job:'Teacher',
//     friends:['Sakib','Sadman','Nahid'],

//     // calcAge: function(birthYear){
//     //     return 2023-birthYear;
//     // }

//     // calcAge: function(){
//     //     return 2023-this.birthYear;
//     // }

//     calcAge: function(){
//         this.age= 2023-this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){
//         console.log(`${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriverLiscense? 'a': 'no'} driver's liscense.`);
//     }
// };

// // console.log(jonas.calcAge(2002));
// // console.log(jonas['calcAge'](2002));
// // console.log(jonas.calcAge());
// console.log(jonas.age);
// jonas.getSummary();

// coding challanges 3
// const mark={
//     fullName:'Mark Miller',
//     mass:78,
//     height:1.69,
//     calcBMI:function(){
//         this.bmi= this.mass/(this.height**2);
//         return this.bmi;
//     }
// };

// const john={
//     fullName:'John Smith',
//     mass:92,
//     height:1.95,
//     calcBMI:function(){
//         this.bmi= this.mass/(this.height**2);
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi);
// console.log(john.bmi);

// for loop
// for(let i=1;i<=10;i++)
//     console.log(`Lifting weights ${i}`);

// const jonasArray = [
//   "BM",
//   "Mahmud",
//   2023 - 2002,
//   "Teacher",
//   ["Sakib", "Sadman", "Nahid"],
//   true
// ];

// for(let i=0;i<jonasArray.length;i++){
//     console.log(jonasArray[i],'->',typeof jonasArray[i]);
// }

// continue and break
// const jonasArray = [
//   "BM",
//   "Mahmud",
//   2023 - 2002,
//   "Teacher",
//   ["Sakib", "Sadman", "Nahid"],
//   true
// ];

// for(let i=0;i<jonasArray.length;i++){
//     // if(typeof jonasArray[i] != 'string') continue;
//     if(typeof jonasArray[i] === 'number') break;
//     console.log(jonasArray[i],'->',typeof jonasArray[i]);
// }

// const jonasArray = [
//   "BM",
//   "Mahmud",
//   2023 - 2002,
//   "Teacher",
//   ["Sakib", "Sadman", "Nahid"],
//   true,
// ];

// for(let i=jonasArray.length-1;i>=0;i--){
//     console.log(i,jonasArray[i]);
// }

// for(let excer=1;excer<=3;excer++){
//     console.log(`exercise no ${excer}
// -----------------------------`);
//     for(let i=1;i<6;i++){
//         console.log(`Doing for ${i}`);
//     }
// }


// while loop 
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

// let dice=Math.trunc(Math.random()*6)+1;
// console.log(dice);
// while(dice != 6){
//     console.log(dice);
//     dice=Math.trunc(Math.random()*6)+1;
//     if(dice===6) console.log(dice);
// };

// coding challanges 4
// challanges 2
// const bills=[22,295,275,648,47,576,364,354,93,556];
// let tips=[],totals=[];

// function calcTip(bill){
//     return bill>=50 && bill<=300? bill*.15: bill*.2;
// }

// for(let i=0;i<bills.length;i++){
//     tips.push(calcTip(bills[i]));
//     totals.push(bills[i]+tips[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// challanges 2
const calcAvg= function(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
        sum+=arr[i];
    return sum/arr.length;
}

console.log(calcAvg([3,4,5]));