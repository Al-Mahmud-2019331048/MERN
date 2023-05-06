// let js='amazing';
// if(js==='amazing') alert('JS is fun');
// console.log(40+20+25);
// console.log('Jonas');
// console.log(25);

// let firstName="BM";
// console.log(firstName);

// let country='Bangladesh';
// let continent='Asia';
// let population=200;
// console.log(country);
// console.log(continent);
// console.log(population);

// let isIsland=false;
// let language;
// console.log(isIsland);
// console.log(language);

// language='Bangla';
// const LANGUAGE='Bangla';
// // LANGUAGE='English';
// console.log(LANGUAGE);

// const description= country +' is in '+ continent +' , and its '+population+' million can speak '+LANGUAGE;
// console.log(description)

// 7
// let age=23;
// let Name='Mahmud';
// let flag=false;
// let undef;
// let empt=null;
// console.log(flag);
// console.log(empt);
// console.log(typeof Name);
// console.log(typeof undef);
// console.log(typeof null);
// age='Twenty Three';
// console.log(age);
// console.log(typeof age);
// undef='defined'
// console.log(undef);

// 8
// let age=30;
// const birthYear=2002;
// // birthYear=2004
// // const jobType;
// var jobType='Programmer';
// jobType="Teacher";
// console.log(jobType);
// surName='Biswas';
// console.log(surName);

// 9 - operators
// const ageMahmud=2023-2002;
// const ageImdad=2023-2004;
// console.log(ageMahmud,ageImdad);
// console.log(ageMahmud*2, ageMahmud/2);
// console.log(2**3);  //2^3
// const firstName="BM",lastName="Mahmud";
// console.log(firstName+' '+lastName);
// console.log(typeof lastName);
// //assignment op
// let x=10+5;  
// console.log(x);
// x+=10;   //x=x+10
// console.log(x);
// x*=4;   //x=x*4
// console.log(x);
// x++;   //x=x+1
// console.log(x);
// x--;   //x=x-1
// console.log(x);
// // comparison op
// console.log(ageMahmud>ageImdad);
// console.log(ageImdad,ageImdad>=18);

// // 10 operator precedence
// let x=10>11 & 1<<2;
// console.log(x);
// let u,v;
// u=v=25-10-5;
// console.log(u,v);

// // coding challange
// let height=1.69;
// let weight=78;
// let BMI=weight/(height**2);
// console.log(BMI);

// // strings 
// const firstName='BM';
// const lastName='Mahmud';
// const fulname="I'm "+ firstName+" ,a student of CSE";
// console.log(fulname);

// // template literalss for string 
// const mahmud=`I'm ${firstName}`;
// console.log(mahmud);
// console.log('String with \n\multiple \n\lines');
// console.log(`String with
// multiple
// lines`);   //here ` not '

// if else 
// const age=17;
// const isOldEnough=age>=18;
// if(isOldEnough){
//     console.log('Can start driving liscence 😊😊');
// }
// else{
//     console.log("Can't start driving liscence 😒😒");
// }
// //emoji windows+.

// coding chalanges 2 
// if else statement 

// // type conversion 
// const inputYear='1991';
// console.log(inputYear+18);
// console.log(Number(inputYear)+18);
// console.log(Number('Mahmud'));
// console.log(String(18),18);
// // type coercion
// console.log('I am ' +23+ ' years old');
// console.log('23'-'10'-3);
// console.log('23'+'10'-3);
// console.log('23'-'10'+3);
// console.log('23'+'10'+3);
// console.log('23'*'2');
// console.log('23'*2);
// console.log('23'>'18');
// console.log('23'>25);
// let n='1'+1;  //11
// n=n-1;
// console.log(n);
// n=2+3+4+'5';
// console.log(n);
// n='10'-'4'-'3'-2+'5';
// console.log(n);

// // 5 falsy values 
// // 0 ,'' ,undefined ,null ,NaN 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean('Mahmud'));
// console.log(Boolean({}));
// // automatic conversion to Boolean 
// const money=100;
// if(money){
//     console.log('Don not spend it at all');
// }
// else{
//     console.log("You should get a job");
// }

// // == vs === 
// const age=18;
// if(age===18) console.log('Adult!');
// // === true if without conversion two values are exactly same 
// console.log(18===18,'18'===18);
// // == true if same after conversion
// console.log(18==18,'18'==18);

// // taking input from user 
// let fav=prompt("What's your favourite number?");
// console.log(fav);
// console.log(typeof fav);
// if(fav==23) console.log("Cool");
// if(fav===23) console.log("Cool");
// fav=Number(prompt("What's your favourite number?"));
// console.log(typeof fav);
// if(fav==23) console.log("Cool");
// if(fav===23) console.log("Cool");

// // Boolean logic
// // and or not 
// const A=true,B=false;
// console.log(A && B);
// console.log(A || B);
// console.log(!A);

// Coding challanges 3

// // switch statement 
// const day='monday';
// switch(day){
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Execute course structure');
//         break;
//     case 'friday':
//         console.log('Sleep');
//         break;
//     case 'wednesday':
//     case 'thrusday':
//         console.log('Learn theory');
//         break;
//     default:
//         console.log('Invalid day');
// }

// // statement and expressin 
// // many expression-> statement 
// if(23>18){
//     console.log('23 is bigger');
// }

// // conditional operator (Ternary) 
// // condition ? if : else 
// const age=23;
// age>=18? console.log('Adult') : console.log('Not adult');
// const Status= age>=18? 'Adult': 'Not adult';
// console.log(Status);

// // coding challanges 4
// const bill=450;
// const tip= (bill>=50 && bill<=300) ? .15*bill : .2*bill;
// console.log(tip);
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);


