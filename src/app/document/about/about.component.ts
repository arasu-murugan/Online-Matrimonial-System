import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name: string = '';
  searchFor: string = '';
  age: number | null = null;
  religion: string = '';
  motherTongue: string = '';
  country: string = 'Indian';
  mobileNumber: string = '';
  submitted: boolean = false;

  profiles = [
    { id: 'P001', name: 'Chris', age: 25, religion: 'Christian', location: 'Chennai', image: '../../../assets/captain.jpg' },
    { id: 'P002', name: 'Elizabeth', age: 27, religion: 'Christian', location: 'Mumbai', image: '../../../assets/wanda.jpg' },
    { id: 'P003', name: 'Brie', age: 23, religion: 'Christian', location: 'Delhi', image: '../../../assets/brie.jpg' },
    { id: 'P004', name: 'Robin', age: 29, religion: 'Christian', location: 'Bangalore', image: '../../../assets/batman.jpg' }
  ];

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.name || !this.searchFor || !this.age || !this.religion || !this.motherTongue || !this.mobileNumber) {
      alert('Please fill out all required fields.');
      return;
    }

    this.submitted = true;
  }

  expressInterest() {
    this.router.navigate(['/contact']);
  }
}
