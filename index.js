

//user is prompted for froyo flavors entering the website
alert("HI welcome to my froyo shop please agree to look at our flavors");
alert( "list of flavors vinnila, chocolet, coffee, strawberry, rockeyroad");
//make a function called froyoy

let froyo = prompt("please enter your FROYOOOOO order here :");

//the users input is split into a array of strings
let flavors = froyo.split(',');

// Create an object to store the count of each flavor
//correctly counts the number of each flavor
let flavorCount = {};

// a for loop is used to iterate the flavors available
flavors.forEach(function(flavor) {
    // flavor = flavor.trim(); 
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
});


// Display the counts in the console as a table
//out put in the console is changed based on userers input
console.table(flavorCount);




