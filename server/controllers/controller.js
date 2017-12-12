var mySql = require('mysql');
const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentscourses'
});

connection.connect(function(err) {
    if(err) {
        throw err;
    }
    else {
        console.log('connected');
    }
})

module.exports = {
    getAllStudents: function(req, res) {
        let sql = "SELECT * FROM students"
        let query = connection.query(sql, (err, results) => {
            if (err) throw err;
            return res.json(results);
        });
    },
    getOneStudent: function(req, res) {
        let sql = `SELECT * FROM students WHERE id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    addStudent: function(req, res) { 
        let student = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            age: req.body.age,
        };
        let sql = `INSERT INTO students (first_name, last_name, age, created_at, updated_at) VALUES
        ('${student.first_name}', '${student.last_name}', ${student.age}, NOW(), NOW())`;
        let query = connection.query(sql, student, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    updateStudent: (req, res) => {
        let student = {
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            age: req.body.age,
        };
        let sql = `UPDATE students SET first_name = '${student.first_name}', last_name = '${student.last_name}', age = ${student.age}, updateD_at = NOW() WHERE id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    deleteStudent: (req, res) => {
        let sql = `DELETE FROM students WHERE id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    getAllCourses: function(req, res) {
        let sql = "SELECT * FROM courses"
        let query = connection.query(sql, (err, results) => {
            if (err) throw err;
            return res.json(results);
        });
    },
    getOneCourse: function(req, res) {
        let sql = `SELECT * FROM courses WHERE id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    addCourse: function(req, res) {
        let course = {
            name: req.body.name,
        };
        let sql = `INSERT INTO courses (name, created_at, updated_at) VALUES
        ('${course.name}', NOW(), NOW())`;
        let query = connection.query(sql, course, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    updateCourse: (req, res) => {
        let course = {
            name: req.body.name,
        };
        let sql = `UPDATE courses SET name = '${course.name}', updated_at = NOW() WHERE id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    deleteCourse: (req, res) => {
        let sql = `DELETE FROM courses WHERE id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    getLatestStudent: (req, res) => {
        let sql = 'SELECT * from students ORDER BY created_at DESC LIMIT 1';
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    getLatestCourse: (req, res) => {
        let sql = 'SELECT * from courses ORDER BY created_at DESC LIMIT 1';
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    enroll: (req, res) => {
        console.log('enrolled');
        let sql = `INSERT INTO enrolled (students_id, courses_id) VALUES (${req.body.studentID}, ${req.body.courseID})`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    getStudentsCourses: (req, res) => {
        let sql = `SELECT * FROM courses LEFT JOIN enrolled ON courses.id = enrolled.courses_id WHERE enrolled.students_id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    getCoursesStudents: (req, res) => {
        let sql = `SELECT * FROM students LEFT JOIN enrolled ON students.id = enrolled.students_id WHERE enrolled.courses_id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    getEnrolledCoursesIDforAStudent: (req, res) => {
        let sql = `SELECT * FROM enrolled WHERE students_id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    deleteEnrolledCourses: (req, res) => {
        let sql = `DELETE FROM enrolled WHERE students_id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
    getEnrolledStudentsIDforCourse: (req, res) => {
        let sql = `SELECT * FROM enrolled WHERE courses_id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        })
    },
    deleteEnrolledStudents: (req, res) => {
        let sql = `DELETE FROM enrolled WHERE courses_id = ${req.params.id}`;
        let query = connection.query(sql, (err, result) => {
            if (err) throw err;
            return res.json(result);
        });
    },
}