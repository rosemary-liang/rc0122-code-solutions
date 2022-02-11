/* exported equal */
function equal(first, second) {
  var boolean;
  if (first.length === 0 && second.length === 0) {
    boolean = true;
  } else {
    if (first.length !== second.length) {
      boolean = false;
    } else {
      for (var i = 0; i < first.length; i++) {
        if (first[i] !== second[i] || second[i] !== first[i]) {
          boolean = false;
          break;
        } else {
          boolean = true;
        }
      }
    }
  }
  return boolean;
}
