import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  username = 'chiranjiv';
  welcomeMessage = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('name')!;
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldService(this.username).subscribe(
      (response) => {
        this.welcomeMessage = response.message;
      },
      (error) => {
        this.welcomeMessage = error.error.message;
      }
    );
  }
}
