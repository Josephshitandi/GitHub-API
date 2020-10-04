import { Injectable } from '@angular/core';
import { Users } from '../users';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  users: Users[]
  

  getUser(term: string) {
    let endPoint = `https://api.github.com/search/users?access_token=${environment.apiKey}&q=${term}`;
    
  }
  
  constructor(private http: HttpClient) {}
  }
  
