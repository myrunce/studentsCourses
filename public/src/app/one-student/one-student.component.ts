import { ActivatedRoute } from '@angular/router';
import { MainService } from '../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-student',
  templateUrl: './one-student.component.html',
  styleUrls: ['./one-student.component.css']
})
export class OneStudentComponent implements OnInit {
  student;
  courses;
  id;
  constructor(private _mainService: MainService, private _activatedRoute: ActivatedRoute) {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._mainService.getOneStudent(this.id, (student) => {
      this.student = student[0];
      this._mainService.getStudentsCourses(this.id, (courses) => {
        this.courses = courses;
      });
    });
  }

  ngOnInit() {
  }

}
