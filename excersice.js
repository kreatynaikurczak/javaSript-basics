// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

let nameOfCourse = "JavaScript Mastery";
let price = 29.99;
let goals = ["learn JvaScript", "build projects", "get a job"];
let index = 2; // This can be changed to access different goals

function getGoalByIndex(goalsArray, index) {
  if (index >= 0 && index < goalsArray.length) {
    return goalsArray[index];  }
  }

  alert(getGoalByIndex(goals, index)); // Accessing the goal by dynamic index

// alert(nameOfCourse);
// alert(price);
// alert(goals)

let courseDetails = {
  courseName: nameOfCourse,
  coursePrice: price,
  mainGoals: goals
};

alert(courseDetails.courseName);
alert(courseDetails.coursePrice);
alert(courseDetails.mainGoals);
alert(courseDetails.mainGoals[1]);


// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

