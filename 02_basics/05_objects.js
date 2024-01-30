// De-structuring of objects ....

const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
};
// course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);
