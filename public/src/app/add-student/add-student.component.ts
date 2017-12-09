import { MainService } from '../main.service';
import { Student } from '../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  student: Student = new Student();
  test;
  courses;
  courseNumArr = [];
  id;
  constructor(private _mainService: MainService, private _router: Router) {
    this._mainService.getAllCourses((courses) => {
      this.courses = courses;
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.courseNumArr);
    this._mainService.addStudent(this.student, (student) => {
      this.student = new Student();
      return;
    });
    this._mainService.getLatestStudent((student) => {
      this.id = student[0].id;
      for (let i = 0; i < this.courseNumArr.length; i++) {
        const data = {
          studentID: this.id,
          courseID: Number(this.courseNumArr[i])
        };
        this._mainService.enroll(data, (result) => {
          return;
        });
      }
    });
    this._router.navigate(['/students']);
  }
}
