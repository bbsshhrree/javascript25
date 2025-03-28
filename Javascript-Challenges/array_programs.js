/* program to reverse a given array*/
let number = [1, 2, 3, 5, 6, 8, 9 , 3]
// console.log(number)
let n ;
// console.log(number.length)
let reverseNumber=[];
 for(i=number.length-1; i >= 0;i--){
    reverseNumber.push(number[i]);
 }
//  console.log(reverseNumber)


/***
 * declare number array of 10 numbers and
 * seperate even and odd numbers in it.
 */
let values = [23, 34, 12, 25, 2, 57, 30, 69, 50, 105]
let evenVal = []
let oddVal = []
for(i = 0;i < values.length; i++){
   let mod = values[i]%2
   if(mod == 0){
      evenVal.push(values[i]);
   }
   else{
      oddVal.push(values[i]);
   }
}
console.log(`Even values are : ${evenVal}`);
console.log(`Odd values are : ${oddVal}`); 