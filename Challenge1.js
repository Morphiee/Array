
// Goal: Create a function that displays the number closets to zero.

var array = [0.1, -0.001]

function highNum(array) {
  var smallNum = array[0];
  array.forEach(function (element) {
    if (Math.abs(element) < Math.abs(smallNum)) {
      smallNum = element;
    }
  })
  console.log(smallNum)
}

// Goal: Create a function that adds all the numbers in the array.

var a = [1, 2, 3, 10,]
var sum = 0

function numAdd() {

  a.forEach( function(e) {
    sum = sum + e;
  })
  console.log(sum)
}

// Goal: Create a function that gets the mean of all values in an array.

var a = [10, 20, 30, 40, 50]
var sum = 0

function numAdd() {
  var index = a.length;
  a.forEach( function(e) {
    sum = sum + e;
  })
  console.log(sum / index);
}

// Goal: Function that finds the index of the highest number.

var array = [-10, 40, 20];
var num = 0;
var index = 0;

function highNum(array) {
  array.forEach(function (element) {
    if (Math.abs(element) > num) {
      num = element
      index = array.indexOf(num);
    }
  })
  console.log(index)
}

// Goal: Create a function that takes an array of your siblings and an array of your parents. Siblings in alphabetical order - Parents in reverse alphabetical order. Then combine the two arrays.

var array = [1, 2, 3, 4, 5, 6];

function oddNum(array) {
  var oddResults = [];
  array.forEach(function (element){
    if (element % 2 !== 0) {
      oddResults = oddResults.concat(element);
    }
  })
  console.log(oddResults);
}

// Goal: Create a function that displays all even numbers from an array.
var array = [1, 2, 3, 4, 5, 6];

function evenNum(array) {
  var evenResults = [];
  array.forEach(function (element){
    if (element % 2 == 0) {
      evenResults = evenResults.concat(element);
    }
  })
  console.log(evenResults);
}

// Create a function that displays all the odd numbers from an array.
var array = [1, 2, 3, 4, 5, 6];

function oddNum(array) {
  var oddResults = [];
  array.forEach(function (element){
    if (element % 2 !== 0) {
      oddResults = oddResults.concat(element);
    }
  })
  console.log(oddResults);
}
