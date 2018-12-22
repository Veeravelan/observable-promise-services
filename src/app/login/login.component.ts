import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentServiceService } from '../_services/student-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginform: FormGroup;

  constructor(public loginFormBuilder: FormBuilder, public router: Router, public serviceRequest: StudentServiceService) {
    this.loginform = this.loginFormBuilder.group({
      username: [''],
      password: ['']
    });

  }
  ngOnInit() {
  }

  login(form: any) {
    console.log(form.username);
    this.serviceRequest.getLoginDetails('authenticate?username=' + form.username + '&password=' + form.password)
      .subscribe(success => {
        console.log(success);
        this.router.navigate(['student']);
      }, error => {
        console.log(error);
      });

  }
  loginReset() {

  }

}
