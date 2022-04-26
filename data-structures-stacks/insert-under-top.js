/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const top = stack.pop();
  if (top !== undefined) {
    stack.push(value);
    stack.push(top);
  }
}
