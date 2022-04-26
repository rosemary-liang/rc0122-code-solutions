/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.peek();
  if (first !== undefined) {
    queue.dequeue();
    const second = queue.peek();
    if (second !== undefined) {
      queue.dequeue();
      if (first < second) {
        queue.enqueue(second);
        return first;
      } else {
        queue.enqueue(first);
        return second;
      }
    } else {
      return first;
    }
  }

}
