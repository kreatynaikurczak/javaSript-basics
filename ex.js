let nameOfCourse = "JavaScript Mastery";
let price = 29.99;
let goals = ["learn JvaScript", "build projects", "get a job"];
let dynamicGoalIndex = 1; // This can be changed to access different goals



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

