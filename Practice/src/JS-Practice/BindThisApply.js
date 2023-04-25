function hello() {
  console.log("Hello", this);
}
const person = {
  name: "John",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function () {
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
  },
};
person.sayHello(); //return object person
person.sayHelloWindow(); //return global object (window)

const anna = {
  name: "Anna",
  age: 20,
};
person.logInfo.bind(anna)(); //name: "Anna", age: 20

person.logInfo.bind(this)(); //underfined
this.name = "test";
person.logInfo.bind(this)(); //name: "test", age: underfined (obj window);

const person2 = {
  name: "Sam",
  age: 30,
  sayHello: hello,
  sayHelloWindow: hello.bind(this),
  logInfo: function (job, phone) {
    console.group(`${this.name}:info`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd;
  },
};
// Difference between how to use bind, call and apply
person2.logInfo.bind(anna, "Math Professor", "34-55-63")();
person2.logInfo.call(anna, "Mathprofessor", "34-55-63");
person2.logInfo.apply(anna, ["teacher", "21-15-62"]);

Array.prototype.multiplyBy = function (n) {
  //we couldn't use arrow function with 'this', because arrow func. it will call the
  // global object (window).
  return this.map((i) => {
    return i * n;
  });
};

const testArray1 = [1, 3, 2, 4];
const testArray2 = [2, 4, 8, 16];
testArray1.multiplyBy(5); // (4) [5, 15, 10, 20]
testArray2.multiplyBy(3); //(4) [6, 12, 24, 48]
