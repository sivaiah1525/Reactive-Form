import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  localdata: any;
  constructor() { }



  ngOnInit(): void {
    this.data = localStorage.getItem('newuser');
    this.localdata = [
      {
        userName: 'sivaiah',
        age: 23,
        mailID: 'siva@gmail.com'
      },
      {
        userName: 'babu',
        age: 23,
        mailID: 'siva@gmail.com'
      },
      {
        userName: 'Ravi',
        age: 23,
        mailID: 'siva@gmail.com'
      }
    ];
  }



}
