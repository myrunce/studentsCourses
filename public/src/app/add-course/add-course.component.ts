import { MainService } from '../main.service';
import { Course } from './../course';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  course: Course = new Course();
  students: Observable<any>;
  studentNumArr = [];
  id;
  constructor(private _mainService: MainService, private _router: Router) {
  }

  ngOnInit() {
    this._mainService.getAllStudents((students) => {
      this.students = students;
      console.log('got students in add-course');
      console.log(this.students);
    });
  }

  onSubmit() {
    this._mainService.addCouse(this.course, (course) => {
      this.course = new Course();
      return;
    });
    this._mainService.getLatestCourse((course) => {
      this.id = course[0].id;
      for (let i = 0; i < this.studentNumArr.length; i++) {
        const data = {
          studentID: Number(this.studentNumArr[i]),
          courseID: this.id
        };
        this._mainService.enroll(data, (result) => {
          return;
        });
      }
    });
    this._router.navigate(['/courses']);
  }
}
