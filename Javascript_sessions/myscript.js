console.log(" from myscript file...!!");
alert("I am Loaded...");

// if (confirm("Do you want to proceed..? ") == true) {
//     //alert("selected");
//    document.getElementById('votestatus').innerHTML='selected'

// } else 
//     //alert(" OOPS....not this time ");
//    document.getElementById('votestatus').innerHTML='Not at this time'


var age = prompt("Please enter your age..")
if (age > 18) {
    //alert("valid to vote");
    // document.write("valid to vote")
    document.getElementById('votestatus').innerHTML = 'Valid to vote'
} else //document.write(" nope")
    //alert(" age insufficient");cdcd
    document.getElementById('votestatus').innerHTML = 'age insufficient'

alert("your age is " + age);