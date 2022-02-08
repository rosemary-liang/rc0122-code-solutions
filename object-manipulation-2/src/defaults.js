/* exported defaults */
function defaults(target, source) {
  for (var key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
}

// define a function, defaults, with 2 arguments
// for statement to iterate through key in source
// if key is NOT in target object, then add the key value pair from source to object
