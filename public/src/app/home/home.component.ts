import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses = [];
  students = [];
  constructor(private _mainService: MainService) {
    this._mainService.getAllCourses((courses) => {
      this.courses = courses;
    });
    this._mainService.getAllStudents((students) => {
      this.students = students;
    });
  }

  ngOnInit() {
  }

}
