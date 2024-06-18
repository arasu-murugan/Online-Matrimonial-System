import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:3000/api/profiles';

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createProfile(profile: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, profile);
  }
}
