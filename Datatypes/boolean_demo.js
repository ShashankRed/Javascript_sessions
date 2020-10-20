var value = true;
console.log(value);
value = false;
console.log(value);

var bool1 = new Boolean("");
var bool2 = new Boolean(0);
var bool3 = new Boolean(null);
var bool4 = new Boolean(NaN);
var bool5 = new Boolean(undefined);
var bool6 = new Boolean("some text");
var bool7 = new Boolean(1);

console.log(bool1+""+bool2+bool3+bool4+bool5+bool6+bool7);