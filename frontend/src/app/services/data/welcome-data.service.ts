import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from 'src/app/app.constant';

export class welcomeMessage {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldService(name: any) {
    return this.http.get<welcomeMessage>(`${API_URL}/hello-world/pv/${name}`);
  }
}
