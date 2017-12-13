import { ActivatedRoute } from '@angular/router';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-course',
  templateUrl: './one-course.component.html',
  styleUrls: ['./one-course.component.css']
})
export class OneCourseComponent implements OnInit {
  students;
  course;
  id;
  constructor(private _mainService: MainService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._mainService.getOneCourse(this.id, (course) => {
      this.course = course[0];
      console.log('got course');
      this._mainService.getCoursesStudents(this.id, (students) => {
        this.students = students;
        console.log('got students');
      });
    });
  }

}
