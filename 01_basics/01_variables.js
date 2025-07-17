const accountId = 144533
let accountEmail = "shivam2089muz@gmail.com"
var accountPassword = "shivam123"
accountCity = " noida"
let accountState;

//accountId = 2
accountEmail = "shivam@gmail.com"
accountPassword = "shiv"
accountCity = " Uttar pradesh"

console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope

*/

console.table([accountId , accountEmail, accountPassword, accountCity, accountState]);
