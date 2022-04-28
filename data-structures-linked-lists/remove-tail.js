/* exported removeTail */

function removeTail(list) {
  if (list.next) {
    let next = list.next;
    while (next.next.next) {
      next = next.next;
    }
    next.next = null;
  }
  return list;
}
