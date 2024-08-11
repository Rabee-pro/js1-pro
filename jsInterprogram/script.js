// Exercise 5:

// adding new infront of the string , if the string starts with "new!" then return original value

// const addNew = (str) => {
//     return str.indexOf('New!') === 0 ? str : `New! ${str}`;
// }

// console.log(addNew('New! Offers')); // Output: 'New! Offers'



// Exercise 1:
// function newStringCreate(strValue){
//     if(strValue.length >= 3){
//         let str1 = strValue.slice(0,3);
//         let str2 = strValue.slice(-3);
//         console.log(str1 + str2);
//     }
//     else{
//         console.log(strValue);
//     }
// }
// newStringCreate("ra");

// let makeNewString = (str) =>{
//     return str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
// }
// console.log(makeNewString("raj"));



// Exercise 2:
// write a js program to extract the first half of the string of even length
// const firstHalf = (str) =>{
//    return str.slice(0, str.length / 2);
// }
// console.log(firstHalf('temple'));



// exercise 3:
// write a js program to concatenate two strings except their first character

// const concatenate = (str1, str2) =>{
//     return (str1.slice(1) + str2.slice(1));
// }
// console.log(concatenate('abc', 'def'));



// exercise 4:
// two value , write a js program to find out which one is nearest to 100

// const closestTo100 = (a,b) =>{
//     return (100 - a) < (100 - b) ? a : b;
// }
// console.log(closestTo100(99, 1));
// console.log(closestTo100(45, 51));
// console.log(closestTo100(50, 50));



// Exercise 5:
// js program to check a given string contain 2 to 4 occurences of a specified character

// const countChars = (str, char) =>{
//     return str.split('').filter(ch => ch === char).length;
// }
// const contains2To4 = (str, char)=>{
//     return countChars(str, char) >= 2 && countChars(str, char) <= 4;
// }
// console.log(contains2To4('oh!', 'o'));
// console.log(contains2To4('ooooh!', 'o'));
// console.log(contains2To4('oooh!', 'o'));



// Exercise 1:
// write js code to find the number of even digits in an array of integers

// function findEvenValue(){
//     const arrayVal = [1, 2, 3, 4, 5];
//     return arrayVal.filter(char => char%2 == 0);
// }

// console.log(findEvenValue());



// Exercise 2:
// write js program to find the number of even values up to a given value
// function noEvenValue(lastValue){
//     let myArray = [];
//     for(let i=1; i <= lastValue; i++){
//         myArray.push(i);
//     }
//     return myArray.filter(myval =>{ return myval%2 == 0}).length;
// }
// console.log(noEvenValue(10));



// Exercise 3:
// write a js code to check whether a given array of integer is sorted in ascending order 
// function sortingArray(myArray){
//     let n = myArray.length;
//     for (let i = 0; i < n-1; i++){
//         for(let j =0; j< n-1-i; j++){
//             if(myArray[j] > myArray[j+1]){
//                 let k = myArray[j];
//                 myArray[j] = myArray[j+1];
//                 myArray[j+1] = k;
//             }
//         }
//     }
//     return myArray;
// }

// console.log(sortingArray([90,50, 20, 60,100]))

// const isAscending = (arr) =>{
//     for(let i = 0; i < arr.length; i+=1){
//         if(arr[i+1] < arr[i]) return false;
//     }
//     return true;
// }
// console.log(isAscending([1, 2, 3, 5, 6]));
// console.log(isAscending([1,2, 5,4,3,6]));



// Exercise 4:
// function largeEvennum(myArray){
//     let evenArray = myArray.filter(value => value%2 == 0);
//     let n = evenArray.length;
//     for(let i= 0; i<n-1; i++){
//         for(let j=0; j<n-1-i; j++){
//             let k = evenArray[j];
//             evenArray[j] = evenArray[j+1];
//             evenArray[j+1] = k;
//         }
//     }
//     return evenArray[n-1];
// }
// console.log(largeEvennum([90,20, 31, 40, 35]));

// const largestEvent = (arr) => Math.max(...arr.filter(num => num%2 === 0));
// console.log(largestEvent([1,2,3,4,5,6]));


// Exercise 5:
// write the js program to replace the first digit
// function replaceFirst(myValue){
//     let finalValue = myValue.slice(1, myValue.length).padStart(myValue.length, '$');
//     return finalValue;
// }
// console.log(replaceFirst('rabeena'));

// const replaceFirstDigit = (str) => str.replace(/[0-9]/, $);
// console.log(replaceFirstDigit('absd1AB'));



// Exercise 1:
// find the leap year
// function findLeapYear(myYear){
//     if(myYear % 4 == 0){
//         console.log(`the year ${myYear} is a leap year`);
//     }
//     else{
//         console.log(`the year ${myYear} is not a leap year`);
//     }
// }

// findLeapYear(2000);



// Exercise 2:
// write a js program to compare two objects to detarmine if the first one contain the same property as second one(which may also have additional property)
// const objA = {a:1, b:2, c:1};
// const objB = {a:1, b:2, c:1};
// const objC = {a:1, b:2, d:1};
// const objectsEqual = (a,b)=>{
//    return Object.keys(a).every(key => a[key] === b[key]);
// }

// console.log(objectsEqual(objA,objB));
// console.log(objectsEqual(objB,objC));
// console.log(objectsEqual(objA,objC));



// Exercise 3:
// write the js program to convert a comma-seperated values (csv) string to 2D array. A new line indicates a new row in the array

// const parseCVS = (csvString) =>{
//    return csvString.split('\n').map(row => row.split(','));
// }

// const str = `abc, def, ghi
// jkl, mno, pqr
// stu, vwx, yza`;
// console.log(parseCVS(str));



// Exercise 4:
// write js prgram to generate a rndomn hexadecimal color code

// function createHexaValue(){
//    const myArray = ["0","1","2","3","4","5","6","7","8","9","A","B","c","D","E","F"];
//    let myValue = "#";
//    for(let i=0; i<6; i++){
//     let randomnNum = Math.floor(Math.random()*myArray.length); 
//     let arrValue = myArray[randomnNum]
//     myValue += arrValue;
//    }
//    return myValue;
// }

// console.log(createHexaValue());





// Exercise -5:
// write a js program that returns true if the provided predicate function returns true for all elements in collection , false othewise

// console.log([1,2,3,4,5].every((x) => x>0));
// console.log([1,2,3,4,5].every((x) => x>3));

// const isEveryElem = (arr, fn) =>{
//     for(let i=0; i<arr.length; i+=1){
//         if(!fn(arr[i])){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(isEveryElem ([1, 2, 3, 4, 5], (x) => x > 0));
// console.log(isEveryElem ([1, 2, 3, 4, 5], (x) => x > 3));


