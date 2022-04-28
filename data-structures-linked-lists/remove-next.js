/* exported removeNext */

function removeNext(list) {
  const next = list.next;
  if (next !== null) {
    list.next = next.next;
  }
}
