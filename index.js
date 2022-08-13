// TODO: Fix the `greet` function so that it returns the correct values.
function student(name, gradeYear) {
  const studentInfo = {
    name,
    gradeYear,
  };

  return {
    greet: function () {
      console.log(
        `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
      );
    },
  };
}


module.exports = student;
