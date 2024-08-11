// vijay sir - 1
// findding divvisible by 3 and 5

// let no = 1;
// let count = 0;
// while(no<=500){
//     if(no%3==0 && no%5==0)
//     {
//       count++;
//      console.log(no);
//     }
//     no=no+1;
// }

// console.log(count);



// vijay sir - 2
// 1 1 1 1 1

// let text = "";
// for(let i=0; i<5; i++){
//   text+="1"
// }
// console.log(text);



//vijay sir - 2
// 1 2 3 4 5

// let myValue = "";
// for(let i=1; i<6; i++){
//   myValue= myValue+i+"";
// }
// console.log(myValue);



// vijay sir - 3
// 1 3 5 7 9

// let newValue = 1
// let myValue = "1"
// for(let i=0; i<4; i++){
//   newValue = newValue + 2;
//   myValue = myValue + newValue
// }
// console.log(myValue);



// vijay sir - 4
// 3 6 9 12 15

// let myValue = "";
// for(let i=1; i<6; i++){
//   let newValue = i*3;
//   myValue = myValue + " " + newValue;
// }
// console.log(myValue);



// vijay sir - 5
// Multiple of 3 and 5

// for(let i=1; i <= 60; i++){
//   if(i%3 == 0 && i%5 == 0){
//     console.log(i);
//   }

// }




// vijay sir - 6
// multiple of 3 or 5

// let i=1;
// while(i <= 60){
//     if(i%3 == 0 || i%5 == 0){
//       console.log(i);
//    }
//    i++;
//    }



// vijay sir - 7
// divisor of given number

// number = 60;
// let i = 1;
// while(i <= number/2){
//   if(number%i == 0){
//     console.log(i);
//   }
//   i++;
// }



// vijay sir - 8
// count of divisor of given number

// number = 60;
// let i = 1;
// let count = 0;
// while(i <= number/2){
//   if(number%i == 0){
//     count++;
//   }
//   i++;
// }
// console.log(count);



// vijay sir - 9
// prime number
// let number = 60;
// let findNum = "";
// for(let i = 1; i <= number; i++){
//     if(i <= 3 && i>= 1){
//         console.log(i);
//     }
//     else{
//         for(let j = 1; j<i; j++){
//             if(i == 6*j+1 || i == 6*j-1){
//                 findNum = findNum+ " "+i;
//             }
//         }
//     }
// }
// console.log(findNum)


// let i=0;
// let num =10;
// let str = 2;
// while(str<num){
//     if(num%st!=0){
//         st++;
//     }
//     else{
//         res = "not prime"
//         break;
//     }
// }
// if(res ==="not prime"){
//     console.log()
// }

// let i=1;
// while(i<=10){
// let no=i,st=2,res="";
// while(st<no)
// {
// if(no%st!=0){
//  st++;
// }
// else{
//  res="notprime"
//  break;
// }
// }
// if(res==="notprime"){
//     console.log(i,"not prime");
// }else{
//     console.log(i,"primeNumber");
// }
// i++;
// }



// vijay sir - 10
// reverse printing a number

// let value = 5703;
// let mystr = value.toString();
// let newValue2 = 0;
// let i = 0;
// while(i < mystr.length) {
//     let newVAlue1 = mystr[i];
//     for(let j=0; j<i; j++){
//         newVAlue1 = newVAlue1 + 0;
//     }
//     newValue2 = newValue2 + parseInt(newVAlue1)

//     i++;
// }

// console.log(newValue2);



// vijay sir - 11 & 12
// count of digits
// sum of the digits

// let num = 7385;
// let count = 0;
// let remainder = 0;
// let total = 0;

// while(num > 0){
//     remainder = num%10;
//     total =total + remainder;
//     num = Math.floor(num / 10);
//     count++;
// }
// console.log(total);
// console.log(count);



//  vijay sir - 13
// reverse the number

// let num =573;
// let reverseNum = 0;
// let myPower = 2;
// let powerValue = 0;
// while(num>0){
//     let remainder = num % 10;
//     powerValue = Math.pow(10, myPower);
//     myPower--;
//     let myValue = remainder * powerValue;
//     reverseNum = reverseNum + myValue;
//     num = Math.floor(num/10);

// }

// console.log(reverseNum)


// let num = 573;
// let reverseNum = 0;

// while (num > 0) {
//     let remainder = num % 10;
//     reverseNum = (reverseNum * 10) + remainder;
//     num = Math.floor(num / 10);
// }

// console.log(reverseNum);



// vijay sir - 14
// palindrome

// let num = 121;
// let myValue = num;
// let reverse = 0;
// while(num>0){
//     let remainder = num%10;
//     reverse = (reverse * 10) + remainder;
//     num = Math.floor(num/10);
// }

// if(myValue == reverse){
//     console.log(`${myValue} is palindrom`);
// }
// else{
//     console.log(`${myValue} is not palindrom`);
// }



// vijay sir - 15
// amstrong number

// let num = 153;
// let num1 = num;
// let myValue = 0;
// while(num>0){
//     let remainder = num%10;
//     let partValue = Math.pow(remainder,3);
//     myValue += partValue;
//     num = Math.floor(num/10);
// }

// if(myValue == num1){
//     console.log("the number is amstrong")
// }
// else{
//     console.log("number is not amstrong");
// }

// const number = prompt("Enter a positive integer");
// const numberOfDigits = number.length;
// let sum = 0;

// // create a temporary variable
// let temp = number;

// while (temp > 0) {

//     let remainder = temp % 10;

//     sum += remainder ** numberOfDigits;

//     // removing last digit from the number
//     temp = parseInt(temp / 10); // convert float into integer
// }

// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }



// vijay sir - 16
// neon number

let num = 9;
let square = num ** 2;
let neon = 0;
console.log(square);
while(square > 0){
    let remainder = square % 10;
    neon+=remainder;
    square = Math.floor(square/10)

}
if(num == neon){
    console.log('number is neon');
}
else{
    console.log("number is not neon");
}



// pattern program - 1

// let pattern = ""
// for(let i=1; i<=5; i++ ){
//     for (let j = 1; j <= 5; j++) {
//         pattern+= "* "
        
//     }
//     pattern+="\n"
// }
// console.log(pattern)


// pattern program - 2

// let pattern = ""
// for(let row=1; row<=5; row++ ){
//     for (let col = 1; col <= 5; col++) {
//         if(row == 1 || row == 5 || col == 1 ||col == 5){
//             pattern+= "* "
//         }else{
//             pattern+= "  "
//         }
//     }
//     pattern+="\n"
// }
// console.log(pattern)


// pattern program - 3 --O

// let pattern = ""
// for(let row=1; row<=5; row++ ){
//     for (let col = 1; col <= 5; col++) {
//         if(row ==1 && col == 1|| row == 1&& col == 5 ||  row == 5 && col == 1 ||row == 5 && col == 5 ){
//             pattern+= "  "
//         }
//         else if(row == 1 || row == 5 || col == 1 ||col == 5){
//             pattern+= "* "
//         }else{
//             pattern+= "  "
//         }
//     }
//     pattern+="\n"
// }
// console.log(pattern)


// pattern program - 3 --L

// let pattern = ""
// for(let row=1; row<=5; row++ ){
//     for (let col = 1; col <= 5; col++) {
        
//         if( row == 5 || col == 1 ){
//             pattern+= "* "
//         }else{
//             pattern+= "  "
//         }
//     }
//     pattern+="\n"
// }
// console.log(pattern)


// pattern - 4 --Q

// let pattern = "";
// for (let row = 1; row <= 6; row++){
//     for(let col = 1; col <= 6; col++){
//         if(row == 1 && col == 1 || row == 5 && col == 1  || row == 1 && col == 6 || row == 1 && col == 5 || row == 6 && col == 1  || row == 5 && col == 6  || row == 6 && col == 5){
//             pattern+="  "
//         }
//         else if(row == 1 || col == 1 || row == 5 || col == 5){
//             pattern+="* ";
//         }
//         else if(row == 6 && col == 6 ){
//             pattern+="* ";
//         }
//         else{
//             pattern+="  "
//         }
       
//     }
//     pattern+="\n";
// }
// console.log(pattern);


// parrern - 5  --T

// let pattern = "";
// for(let row = 1; row <= 5; row++){
//     for(let col = 1; col <= 5; col++){
//         if(row == 1 || col == 3){
//             pattern+="* ";
//         }
//         else{
//             pattern += "  "
//         }
        
//     }
//     pattern+="\n";
// }
// console.log(pattern)


// pattern -6 --I

// let pattern = "";
// for(let row = 1; row <= 5; row++){
//     for(let col = 1; col <= 5; col++){
//         if(row == 1 || col == 3 || row == 5){
//             pattern+="* ";
//         }
//         else{
//             pattern+="  ";
//         }
//     }
//     pattern+="\n";
// }
// console.log(pattern)


// patttern - 7 --J

// let pattern= "";
// for(let row = 1; row <= 5; row++){
//     for(let col = 1; col <= 5; col++){
//         if(row == 5 && col ==5 || row == 5 && col == 4 || row == 5 && col == 3){
//             pattern+="  ";
//         }
//         else if(row == 1 || col == 3 || row == 5){
//             pattern+="* ";
//         }
//         else{
//             pattern+="  ";
//         } 
//     }
//     pattern+="\n";
// } 
// console.log(pattern);


// pattern -8 --U

// let pattern = ""
// for(let row = 1; row <= 5; row++){
//     for(let col =1; col<= 5; col++){
//         if(row == 5 && col == 1 || row == 5 && col == 5){
//             pattern+="  ";

//         }
//         else if( row == 5 || col == 1 || col == 5){
//             pattern+="* ";
//         }
//         else{
//             pattern+="  ";
//         }
//     }
//     pattern+="\n";
// }
// console.log(pattern)