// TODO: Fix the `greet` function so that it returns the correct values.
const student = (name, gradeYear) => {
  const studentInfo = {
    name,
    gradeYear,
  };

  const greet = () => {
    console.log(
      `My name is ${studentInfo.name} and I am in ${studentInfo.gradeYear} grade`
    );
  }
  return {
    greet
  };
}


module.exports = student;
