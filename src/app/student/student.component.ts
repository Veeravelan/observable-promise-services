import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModelGroup } from '@angular/forms';
import { ValidatorsMethod } from '../_validators/validators';
import { StudentServiceService } from '../_services/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public studentform: FormGroup;
  constructor(public frmbld: FormBuilder, public httpRequest: StudentServiceService) { }

  ngOnInit() {
    this.buildForm();
  }
  ngOnChange() {
    this.buildForm();
  }
  buildForm() {
    this.studentform = this.frmbld.group(
      {
        'firstname': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        'lastname': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        'email': ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$')]],
        'password': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        'age': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        'joindate': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], ''],
        'enddate': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)], '']
      },
      { validator: [ValidatorsMethod.yearValidator()] }
    );
    this.studentform.valueChanges.subscribe(changes => {
      console.log(changes);
      console.log(this.studentform);
    });
  }
  // getStudent(){
  //   this.httpRequest.getStudent().subscribe((response)=>{
  //     console.log(response);
  //   });
  // }
  getStudentReset() {
    this.httpRequest.getStudent().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}
