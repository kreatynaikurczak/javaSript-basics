let index = 2;
let mainGoals = ["learn", "experinece", "job"];

let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
  sayHello() {
    console.log("Hello, World!");
  },
};

person.sayHello(); // Call the method to greet

function accessArayElement(list, identifier) {
  let listElement = list[identifier];
  return listElement;
}

let firstElement = accessArayElement(mainGoals, index); // Accessing the goal by dynamic index
console.log(firstElement); // Output the accessed element
