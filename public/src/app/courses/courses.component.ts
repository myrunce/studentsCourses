import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses;
  studentsEnrolled = [];
  constructor(private _mainService: MainService) {
  }

  ngOnInit() {
    this._mainService.getAllCourses((courses) => {
      this.courses = courses;
      for (let i = 0; i < this.courses.length; i++) {
        console.log(this.courses[i].id);
        this._mainService.getCoursesStudents(this.courses[i].id, (result) => {
          console.log(result);
          this.studentsEnrolled.push(result.length);
        });
      }
    });
  }

  deleteCourse(id) {
    this._mainService.deleteEnrolledStudents(id, (result) => {
      this._mainService.deleteCourse(id, (success) => {
        this._mainService.getAllCourses((courses) => {
          this.courses = courses;
        });
      });
    });
  }
}
