var controller = require('../controllers/controller.js');
const path = require('path'); 

module.exports = function(app) {
    app.get('/api/students', controller.getAllStudents);
    app.post('/api/students', controller.addStudent);
    app.get('/api/students/:id', controller.getOneStudent);
    app.get('/api/latestStudent', controller.getLatestStudent);
    app.put('/api/students/:id', controller.updateStudent);
    app.delete('/api/students/:id', controller.deleteStudent);
    app.get('/api/courses', controller.getAllCourses);
    app.post('/api/courses', controller.addCourse);
    app.get('/api/courses/:id', controller.getOneCourse);
    app.get('/api/latestCourse', controller.getLatestCourse);
    app.put('/api/courses/:id', controller.updateCourse);
    app.delete('/api/courses/:id', controller.deleteCourse);
    app.post('/api/enroll', controller.enroll); 
    app.get('/api/studentsCourses/:id', controller.getStudentsCourses); 
    app.get('/api/coursesStudents/:id', controller.getCoursesStudents);
    app.get('/api/enrolledCoursesID/:id', controller.getEnrolledCoursesIDforAStudent);
    app.delete('/api/deleteEnrolledCourses/:id', controller.deleteEnrolledCourses); 
    app.get('/api/enrolledStudentsID/:id', controller.getEnrolledStudentsIDforCourse);
    app.delete('/api/deleteEnrolledStudents/:id', controller.deleteEnrolledStudents);     
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html")) //to allow angular routes to work
    });
}