//objects example
const myobject = {
    'js':'javascript', 
    'py':'python', 
    'rb':'ruby'
};
for(const key in myobject){
    //console.log(myobject[key]);
    
}
//array example
const subjects = ["javascript", "python", "ruby"];
for (const key in subjects){
   // console.log(subjects[key]);
}

//map example
const mymap = new Map();
mymap.set('js', 'javascript');
mymap.set('py', 'python');
mymap.set('rb', 'ruby');
// for(const key in mymap){ // not possible as map are not iterable
//     console.log(key);
// }
for(const [key, val] of mymap){
 console.log(key, val);
}