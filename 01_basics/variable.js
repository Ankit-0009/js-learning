const accountId = 12234
let accountEmail = 'ankit##123'
var password = 2356
accountCity = 'Jaipur'
let accountState

//accountId = 7 is not allowed due to const

accountEmail = 'ankit%%234'
password = 456
accountCity = 'Bengluru'

/*
    Not prefer using of var
    because in issue in block scope and functional scope
 */
console.log(accountId);
console.table([accountId,accountEmail,accountCity,password,accountState])