import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { StudentService } from '../student.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, HttpClientModule,],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css',
  providers: [StudentService]
})
export class ListStudentsComponent implements OnInit {
  public students: any;
  constructor(private _myService: StudentService) { }
  ngOnInit() {
      this.getStudents();
  }
  getStudents() {
  this._myService.getStudents().subscribe({
    next: (data => { this.students = data }),
    error: (err => console.error(err)),
    complete: (() => console.log('finished loading'))
  });
}

  onDelete(studentId: string) {
    this._myService.deleteStudent(studentId);
 }
}
