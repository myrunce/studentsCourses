import { AddCourseComponent } from './add-course/add-course.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { OneCourseComponent } from './one-course/one-course.component';
import { OneStudentComponent } from './one-student/one-student.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'students/add', component: AddStudentComponent},
  {path: 'courses/add', component: AddCourseComponent},
  {path: 'students/:id', component: OneStudentComponent},
  {path: 'courses/:id', component: OneCourseComponent},
  {path: 'students/update/:id', component: UpdateStudentComponent},
  {path: 'courses/update/:id', component: UpdateCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
