let students = ['Michael', 'Dusty', 'George', 'Vada', 'John', 'Josh'];

function addStudents(name) {
  students.push(name);
}

const instructor = 'Edan';

// let allTheThingsWeWant = {
//   students: students,
//   instructor: instructor,
//   addStudents:addStudents
// };
// module.exports = allTheThingsWeWant;

module.exports = {
  students: students,
  instructor: instructor,
  makeStudent: function (name) {
    this.students.push(name);
  },
};
