import { Course } from './../course';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  id;
  course;
  courseName;
  students;
  studentsEnrolled;
  studentNumArr = [];

  constructor(private _activatedRoute: ActivatedRoute, private _mainService: MainService, private _router: Router) {
  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._mainService.getAllStudents((students) => {
      this.students = students;
      console.log('got students');
    });
    this._mainService.getStudentsIDforCourse(this.id, (students) => {
      this.studentsEnrolled = students;
      console.log('got students enrolled');
    });
    this._mainService.getOneCourse(this.id, (course) => {
      this.course = course;
      this.courseName = course[0].name;
      console.log('set name and got course');
    });
  }

  onSubmit() {
    this.studentNumArr = $('#studentsID').val();
    const updatedCourse = new Course();
    updatedCourse.name = this.course[0].name;
    this._mainService.updateCourse(this.id, updatedCourse, (course) => {
      return;
    });
    this._mainService.deleteEnrolledStudents(this.id, (result) => {
      for (let i = 0; i < this.studentNumArr.length; i++) {
        const data = {
          studentID: Number(this.studentNumArr[i]),
          courseID: this.id
        };
        this._mainService.enroll(data, (success) => {
          return;
        });
      }
    });
    this._router.navigate(['/courses']);
  }

  isChecked(id) {
    for (let i = 0; i < this.studentsEnrolled.length; i++) {
      if (this.studentsEnrolled[i].students_id === id) {
        return true;
      }
    }
  }
}
