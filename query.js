const getStudents = "select * from userNetplix";
const getStudentById = "select * from students where id = $1";
const selectEmail = "select * from students where email = $1";
const addStudent = "insert into students (name, email) values ($1, $2)";
const getUser = "select name from userNetplix where email = $1 and password = $2";

module.exports = {
    getStudents,
    getStudentById,
    selectEmail,
    addStudent,
    getUser,
};