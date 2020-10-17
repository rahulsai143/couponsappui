import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invalid-request-component',
  templateUrl: './invalid-request-component.component.html',
  styleUrls: ['./invalid-request-component.component.sass']
})
export class InvalidRequestComponentComponent implements OnInit {
  errorMessage :string;
  title:string;
  defaultpPath :string;


  constructor(@Inject(Router)private router:Router) { }

  ngOnInit(): void {
    this.defaultpPath = '/home';
    this.title = 'Access Denied';
    this.errorMessage = '401: You have no rights to access this. Please Login';
  }

}
