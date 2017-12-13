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
  }

  ngOnInit() {
    this._mainService.getAllCourses((courses) => {
      this.courses = courses;
      console.log('got courses in home');
      console.log(this.courses);
    });
    this._mainService.getAllStudents((students) => {
      this.students = students;
      console.log('got students in home');
      console.log(this.students);
    });
  }

}
