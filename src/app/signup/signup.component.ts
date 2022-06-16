import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router : Router) { }

  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      mobile:['']
    })
  }
  //why wont you work(get back to this)
  signUp(){
    this.http.post<any>(' http://localhost:3000/signupUsers',this.signupForm.value)
    .subscribe(res=>{
      alert("signup succesfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }

}
