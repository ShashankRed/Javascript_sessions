var first_name = 'king';
var last_name = 'kong';

console.log(first_name+last_name);
console.log(first_name+" "+last_name);

var description = "Hello everyone, we are talking about 'javascript'";
console.log(description);

var description = 'Hello everyone, we are talking about "javascript"';
console.log(description);

var description = "Hello everyone, we are talking about \"javascript\"";
console.log(description);

var description = 'Hello everyone, we are talking about \'javascript\'';
console.log(description);

// if one object compares with string literal it checks for values and when both objects
//checks for object references. if === checks for type and value.


//activity need to checked for clarity

var str1 = new String("hello world");
var str2 = new String("hello world");
var str3 = "hello world";
var str4 = str1;
