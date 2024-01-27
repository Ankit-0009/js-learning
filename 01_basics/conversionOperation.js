 let score = '33'

 console.log(typeof score);
 console.log(typeof(score));

 let valueInNum = Number(score);
 console.log(typeof valueInNum);

 score = "33abc"
 valueInNum = Number(score);
 console.log(typeof valueInNum); // But it should not be a number due to score = "33abc" which is not a number.
 console.log(valueInNum); // Here it print the value of valueInNum is NaN => Not a Number.

 score = null
 valueInNum = Number(score);
 console.log(typeof valueInNum); // It convert it number which is 0.
 console.log(valueInNum);

 score = undefined
 valueInNum = Number(score);
 console.log(typeof valueInNum); // It convert the type of score which is undefined into the Number.
 console.log(valueInNum); // But the value in the valueInNum is NaN.


 /*
   '33' => 33
   '33abc' => NaN
   true => 1
   false => 0 
 */

 let isLogged = 1;
 let booleanLogged = Boolean(isLogged); // 1 has converted into true.
 console.log(booleanLogged);

 isLogged = "";
 booleanLogged = Boolean(isLogged); // Empty string converted into false.
 console.log(booleanLogged);

 isLogged = "JS";
 booleanLogged = Boolean(isLogged); // The string is converted into true.
 console.log(booleanLogged);

 
 let someNumber = 33;
 let stringNumber = String(someNumber);
 console.log(stringNumber);
 console.log(typeof stringNumber); // Here converted 33 as '33'. 


 /******************************** OPERATIONS ************************************/
 
 
 let value = 3;
 let negValue = -value;
 console.log(negValue);

 //Addition of strings...
 let str1 = 'hello'
 let str2 = ' World'
 let str3 = str1 + str2
 console.log(str3);

 console.log('1' + 2);
 console.log(1 + '2');
 console.log('1' + 2 + 2); // String encounter first then all treat as the string
 console.log(1 + 2 + '2'); // Number encounter first so they add 1 + 2 = 3 then '2' is added as string as above.
 