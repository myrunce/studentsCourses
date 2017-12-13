import { Student } from '../student';
import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id;
  student;
  fName;
  lName;
  courses;
  coursesEnrolled;
  courseNumArr = [];

  constructor(private _activatedRoute: ActivatedRoute, private _mainService: MainService, private _router: Router) {
  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._mainService.getAllCourses((courses) => {
      this.courses = courses;
    });
    this._mainService.getCoursesIDforStudent(this.id, (courses) => {
      this.coursesEnrolled = courses;
      console.log(this.coursesEnrolled);
    });
    this._mainService.getOneStudent(this.id, (student) => {
      this.student = student;
      this.fName = student[0].first_name;
      this.lName = student[0].last_name;
    });
  }

  onSubmit() {
    this.courseNumArr = $('#coursesID').val();
    const updatedStudent = new Student();
    updatedStudent.firstName = this.student[0].first_name;
    updatedStudent.lastName = this.student[0].last_name;
    updatedStudent.age = this.student[0].age;
    this._mainService.updateStudent(this.id, updatedStudent, (student) => {
      return;
    });
    this._mainService.deleteEnrolledCourses(this.id, (result) => {
      for (let i = 0; i < this.courseNumArr.length; i++) {
        const data = {
          studentID: this.id,
          courseID: Number(this.courseNumArr[i])
        };
        this._mainService.enroll(data, (success) => {
          return;
        });
      }
    });
    this._router.navigate(['/students']);
  }

  isChecked(id) {
    for (let i = 0; i < this.coursesEnrolled.length; i++) {
      if (this.coursesEnrolled[i].courses_id === id) {
        return true;
      }
    }
  }
}
