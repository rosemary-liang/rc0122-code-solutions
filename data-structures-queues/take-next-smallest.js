/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  // Compare 2 until first item is smaller than second item
  let next = queue.dequeue();
  while (next > queue.peek()) {
    queue.enqueue(next);
    next = queue.dequeue();
  }
  return next;
}
