const sayHello = function (name){
  console.log("Hello, " + name);
};
sayHello("Caliban");
const returnSayHello = function (name){
  return "Hello " + name;
};
const greeting = returnSayHello("John");
console.log(greeting);
