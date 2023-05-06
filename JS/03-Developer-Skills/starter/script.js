// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// BUG 
// // prob 1
// const tempratures=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];

// function calcAmp(temps){
//     let MAX=temps[0],MIN=temps[0];
//     for(let i=0;i<temps.length;i++){
//         if(typeof temps[i] != "number") continue;
//         if(temps[i]>MAX) MAX=temps[i];
//         if(temps[i]<MIN) MIN=temps[i];
//     }
//     return MAX-MIN;
// }

// console.log(calcAmp(tempratures));


// // prob 2
// const tempratures1=[3,-2,-6,-1,'error',9,13,17,15,14,9,5];
// const tempratures2=[2,-1,4,'error',3,40,4,41,39];

// function calcAmp(temps){
//     let MAX=temps[0],MIN=temps[0];
//     for(let i=0;i<temps.length;i++){
//         if(typeof temps[i] != "number") continue;
//         if(temps[i]>MAX) MAX=temps[i];
//         if(temps[i]<MIN) MIN=temps[i];
//     }
//     return MAX-MIN;
// }
// const tempratures=tempratures1.concat(tempratures2);
// console.log(calcAmp(tempratures));

// // reverse function 
// let array=[5,2,5,1,6,7,3,6];
// console.log(array.reverse());

// const measureKelvin=function(){
//     const measurement={
//         type : 'temp',
//         unit:'celcius',
//         value: Number(prompt('Degrees celcius:')),
//     };

//     console.table(measureKelvin);
    
//     const kelvin=measurement.value+273;
//     return kelvin;
// }

// console.log(measureKelvin());

// coding challanges 1 
function printForecast(temps){
    for(let i=0;i<temps.length;i++){
        console.log(`...${temps[i]} in ${i+1} days,`);
    }
}

printForecast([17,18,19]);