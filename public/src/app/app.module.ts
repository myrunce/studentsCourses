import { MainService } from './main.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { OneStudentComponent } from './one-student/one-student.component';
import { OneCourseComponent } from './one-course/one-course.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    CoursesComponent,
    AddStudentComponent,
    AddCourseComponent,
    OneStudentComponent,
    OneCourseComponent,
    UpdateStudentComponent,
    UpdateCourseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
