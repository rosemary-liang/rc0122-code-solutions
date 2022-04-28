/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const newList = new LinkedList(value);
  const restOfFirstList = list.next;
  newList.next = restOfFirstList;
  list.next = newList;
}
