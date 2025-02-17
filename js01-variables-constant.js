const accountId = 1012211
let accountEmail = "123@gmail.com"
var accountPhno = 9867543211
 accountCity ="Pune"
let accountBal;
console.log(accountId)
//accountId = 10123122 //not allowed as it's constant variable
//console.log("Changed id " + accountId);

console.table([accountId, accountEmail, accountPhno, accountCity, accountBal])

/**
 * never use 'var' because the issue of scope 
 * practice to use either let or constant
 * 
 */
