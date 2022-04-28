/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const newHead = list.next;
  const thirdNode = list.next.next;
  newHead.next = list;
  newHead.next.next = thirdNode;
  return newHead;
}
