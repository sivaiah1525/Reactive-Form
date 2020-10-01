import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;
  newuser: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });

  }




  savedata(data) {
    if (!data) {
      return;
    } else {
      localStorage.setItem('newuser', data);
      this.router.navigate(['/login']);
    }

  }

}
