var no=100;
console.log(no+" its a type of "+typeof(no));

var number1 = new Number(1000);
var number2 = new Number(1000);
var number3 = number1;
console.log(number1==number2); // erro because diff objects..
console.log(number1===number2); // error in this case

console.log(number3==number1); // == compares object references not values

console.log(number3===number1);  //=== checks object/type and value 


// 