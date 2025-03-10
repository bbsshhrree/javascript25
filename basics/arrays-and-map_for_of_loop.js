/**
 * Array is a data structure that can store a collection of items
 * 
 */
// const arr = [1, 2, 3, 4, 5];
// console.log(arr); // [1, 2, 3, 4, 5]
// for( const val of arr){
//     console.log('num is ' + val);
// }

//print string array using for of loop
// const greetings = ['hi', 'hello', 'hey', 'hola'];
// for (greet of greetings){
//     console.log(greet);
// }

//pring map using for of loop
const map = new Map();
map.set('IN', 'India');
map.set('FR', 'France');
map.set('IT', 'Italy');
for(const key of map){
    console.log(key);
    
}
for (const [key, val] of map){
    console.log(key + ' is for '+ val);
}