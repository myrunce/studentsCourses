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
          if (result.length === 0) {
            this.studentsEnrolled.push({id: this.courses[i].id, num: 0});
          } else {
            this.studentsEnrolled.push({id: this.courses[i].id, num: result.length});
          }
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

  displayLength(id) {
    for (let i = 0; i < this.studentsEnrolled.length; i++) {
      if (id === this.studentsEnrolled[i].id) {
        return this.studentsEnrolled[i].num;
      }
    }
  }
}
