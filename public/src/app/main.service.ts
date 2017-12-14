import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {

  constructor(private _http: Http) { }

  addStudent(student, callback) {
    this._http.post('/api/students', student)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getAllStudents(callback) {
    this._http.get('/api/students')
    .subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  addCouse(course, callback) {
    this._http.post('/api/courses', course)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getAllCourses(callback) {
    this._http.get('/api/courses')
    .subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getOneStudent(id, callback) {
    this._http.get('/api/students/' + id)
    .subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getOneCourse(id, callback) {
    this._http.get('/api/courses/' + id)
    .subscribe(
      (res) => {
        callback(res.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  updateStudent(id, student, callback) {
    this._http.put('/api/students/' + id, student)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  updateCourse(id, course, callback) {
    this._http.put('/api/courses/' + id, course)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getLatestStudent(callback) {
    this._http.get('/api/latestStudent')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getLatestCourse(callback) {
    this._http.get('/api/latestCourse')
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  enroll(data, callback) {
    this._http.post('/api/enroll', data)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getStudentsCourses(id, callback) {
    this._http.get('/api/studentsCourses/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getCoursesStudents(id, callback) {
    this._http.get('/api/coursesStudents/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getCoursesIDforStudent(id, callback) {
    this._http.get('/api/enrolledCoursesID/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  deleteEnrolledCourses(id, callback) {
    this._http.delete('/api/deleteEnrolledCourses/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  getStudentsIDforCourse(id, callback) {
    this._http.get('/api/enrolledStudentsID/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  deleteEnrolledStudents(id, callback) {
    this._http.delete('/api/deleteEnrolledStudents/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  deleteCourse(id, callback) {
    this._http.delete('/api/courses/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  deleteStudent(id, callback) {
    this._http.delete('/api/students/' + id)
    .subscribe(
      (response) => {
        callback(response.json());
      },
      (err) => {
        throw err;
      }
    );
  }
  test(callback) {
    this._http.get('/api/test')
    .subscribe(
      (response) => {
        callback(response);
      },
      (err) => {
        throw err;
      }
    );
  }
}
