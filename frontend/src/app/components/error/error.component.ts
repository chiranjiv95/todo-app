import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An error occured! Contact support at 1234-5678-****';
  constructor() {}

  ngOnInit(): void {}
}
