/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  while (queue.peek !== undefined && index > 0) {
    queue.enqueue(queue.dequeue());
    index--;
  }
  return queue.dequeue();
}
