let greatingNumber = 10;
let greatingText = "Hello, World!CX";
let hobbies = ["Reading", "Coding", "Hiking"];
let yearsAsDeveloper = 0;

let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};

function calculateAge(person) {
  yearsAsDeveloper = person.age - 18; // Assuming the person started working at age 20
}
calculateAge(person);
alert(yearsAsDeveloper);

person.age = 31; // Update age
calculateAge(person); // Recalculate years as developer
alert(yearsAsDeveloper);

// alert(hobbies[0]);
// alert(person.age);

// alert(greatingNumber);
// alert(greatingNumber + 5);
// alert(greatingText);
// alert(2);
