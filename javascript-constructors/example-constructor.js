function ExampleConstructor() {

}

console.log('ExampleConstructor', ExampleConstructor);
console.log('typeof ExampleConstructor', typeof ExampleConstructor);

var aConstructor = new ExampleConstructor();
console.log('aConstructor', aConstructor);

var isInstanceOf = aConstructor instanceof ExampleConstructor;
console.log('aConstructor instanceof ExampleConstructor', isInstanceOf);
