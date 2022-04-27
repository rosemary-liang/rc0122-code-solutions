/* exported take2nd */

function take2nd(queue) {
  const first = queue.peek();
  if (first !== undefined) {
    queue.dequeue();
    const second = queue.dequeue();
    if (second !== undefined) {
      queue.enqueue(first);
      return second;
    } else {
      return first;
    }
  }
}
