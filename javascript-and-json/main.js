var books = [
  {
    isbn: '123456789',
    title: 'JSON for Dummies',
    author: 'Dr. Smartypants'
  },
  {
    isbn: '22345789',
    title: 'JSON Volume II',
    author: 'Dr. Dummypants'
  },
  {
    isbn: '323456789',
    title: 'JSON Textbook',
    author: 'John Smith'
  }
];

console.log('typeof books:', typeof books);
console.log('books:', books);

var stringify = JSON.stringify(books);
console.log('typeof stringify:', typeof stringify);
console.log('stringify:', stringify);

var studentString = '{ "Number id": "23948798","String name": "Becky Cupcakes"}';
console.log('typeof studentString:', typeof studentString);
console.log('studentString:', studentString);

var studentObj = JSON.parse(studentString);
console.log('typeof studentObj:', typeof studentObj);
console.log('studentObj:', studentObj);
