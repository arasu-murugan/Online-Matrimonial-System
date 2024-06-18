import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    if (!this.email || !this.password) {
      alert('Please fill out all required fields.');
      return;
    }

    const newUser = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:3000/api/register', newUser)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/about']);
      }, error => {
        console.error(error);
      });
  }
}
