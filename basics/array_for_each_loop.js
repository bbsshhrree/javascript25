const ary = [1, 2, 3, 4, 5];
// simple function

ary.forEach(function(i){
    //console.log(i);
});


//array function
const arr1 = ['A', 'B', 'C', 'D', 'E'];
arr1.forEach((i, key, arr) =>{
 //   console.log(i)
 //console.log(i,key, arr);
});

//array of objects
const myCoding = [
    { 
        lname:"javascript",
        lfilename:"js.js"
    },
    {   
        lname:"php",
        lfilename:"php.php"
    },
    {
        lname:"html",
        lfilename:"html.html"
    }
];
myCoding.forEach((item) =>{
   console.log(`${item.lfilename} files saved with ${item.lfilename}extentions!!!`); 
});