import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students;
  courseEnrolled = [];
  constructor(private _mainService: MainService) {
  }

  ngOnInit() {
    this._mainService.getAllStudents((students) => {
      this.students = students;
      console.log('got students in students');
      console.log(this.students);
      for (let i = 0; i < this.students.length; i++) {
        this._mainService.getStudentsCourses(this.students[i].id, (result) => {
          if (result.length === 0) {
            this.courseEnrolled.push({id: this.students[i].id, num: 0});
          } else {
            this.courseEnrolled.push({id: this.students[i].id, num: result.length});
          }
        });
      }
      console.log('got number of courses enrolled per student in students');
      console.log(this.courseEnrolled);
    });
  }

  deleteStudent(id) {
    this._mainService.deleteEnrolledCourses(id, (result) => {
      this._mainService.deleteStudent(id, (success) => {
        this._mainService.getAllStudents((students) => {
          this.students = students;
        });
      });
    });
  }

  displayLength(id) {
    for (let i = 0; i < this.courseEnrolled.length; i++) {
      if (id === this.courseEnrolled[i].id) {
        return this.courseEnrolled[i].num;
      }
    }
  }
}
