import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-incharch',
  templateUrl: './incharch.component.html',
  styleUrls: ['./incharch.component.css']
})
export class IncharchComponent implements OnInit {
  DataSource;
  public studentArray:any[];
  
  constructor() {
    this.studentArray = [
      {"studentId" : 1, "studentName" : "Name1"},
      {"studentId" : 2, "studentName" : "Name2"},
      {"studentId" : 3, "studentName" : "Name3"},
      {"studentId" : 4, "studentName" : "Name4"}
    ]
   }

   refreshData(){
    this.studentArray = [
      {"studentId" : 1, "studentName" : "Name1"},
      {"studentId" : 2, "studentName" : "Name2"},
      {"studentId" : 3, "studentName" : "Name3"},
      {"studentId" : 4, "studentName" : "Name4"},
      {"studentId" : 5, "studentName" : "Name5"}
    ]
   }

  ngOnInit() {
  }
  studentRecord(index: number, student: any): number{
    return student.studentId;
  }
}
