/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * 1 = O(2)
    if (!seen[word]) {              // 3 * n = O(3n)
      seen[word] = true;
      unique[unique.length] = word; // 3 * 1 = O(3)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 1 * 1 = O(1)
      c++                           // 2 * 1 = O(2)
    ) {
      const comparing = words[c];   // 2 * n = O(2n)
      if (comparing === word) {     // 1 * n = O(n)
        isUnique = false;           // 1 * n = O(n)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;                    // _ * _ = O(?)
} // Big O Notation for uniqueQuadratic: O(n^2)
