/* exported chunk */

// outer loop to loop from start to end of array
// make the subarray, fill subarray with amt of chunk items, move subarray to final array
// what is dictating position of i? --> final expression will dictate where first loop goes after chunk is created
// ^^ i =+ size -->

// nested loop to loop for length of chunk
// needs to not go outside bounds of array ; inner loop needs to stop at remainder instead of the full "size"

function chunk(array, size) {
  var resultArray = [];
  for (var value of array) {
    var lastArray = resultArray[resultArray.length - 1];
    if (!lastArray || lastArray.length === size) {
      resultArray.push([value]);
    } else {
      lastArray.push(value);
    }
  }
  return resultArray;
}

// define a function, chunk, with 2 parameters, array and size
// empty array literal is assigned to var resultArray
// for...of loop to iterate through values of array
// resultArray at last index is assigned to the variable, lastArray
// ^^ this resets "lastArray"  to the last index of "resultArray" for each iteration
// ^^ once lastArray.length === size, value is pushed directly to resultArray, which extends the length of resultArray by 1
// ^^ otherwise, value is pushed to lastArray (final array at last index of resultArray)

// if statement where if

// variable lastArray is falsy OR
// length of lastArray is strictly equal to size
// push value of the array at current index to variable, resultArray

// else
// push value of array at current index to variable, lastArray

// return resultArray
