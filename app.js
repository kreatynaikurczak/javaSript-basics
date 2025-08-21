let greatingNumber = 10;
let greatingText = "Hello, World!CX";
let hobbies = ["Reading", "Coding", "Hiking"];

let person = {
  name: "John Doe",
  age: 30,
  isEmployed: true,
};

function calculateAge(personAge) {
  return personAge - 18;
}

let yearsAsDeveloper = 0;
yearsAsDeveloper = calculateAge(person.age);
alert(yearsAsDeveloper);

person.age = 31; // Update age
yearsAsDeveloper = calculateAge(person.age); // Recalculate years as developer
alert(yearsAsDeveloper);

// alert(hobbies[0]);
// alert(person.age);

// alert(greatingNumber);
// alert(greatingNumber + 5);
// alert(greatingText);
// alert(2);
