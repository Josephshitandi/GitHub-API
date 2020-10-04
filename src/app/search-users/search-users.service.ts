import { Injectable } from '@angular/core';
import { Users } from '../users';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {
users: Users[]
  

  getUser(searchTerm: string){
  let userEndpoint = `https://api.github.com/search/users?access_token=${environment.apiKey}&q=${searchTerm}`;
   
  
  }

  constructor(private userHttp: HttpClient) { }
}
