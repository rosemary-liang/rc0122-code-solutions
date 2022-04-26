/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const first = queue.dequeue();
    const second = queue.peek();
    queue.enqueue(first);
    return second;
  }
}
