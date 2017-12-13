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
      console.log('got courses in courses');
      console.log(this.courses);
      for (let i = 0; i < this.courses.length; i++) {
        this._mainService.getCoursesStudents(this.courses[i].id, (result) => {
          this.studentsEnrolled.push(result.length);
        });
        console.log('got students enrolled per course in courses');
        console.log(this.studentsEnrolled);
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
