import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:3300/user/listUser";
  constructor(private http:HttpClient) { }
  userdata()
  {
return this.http.get(this.url);

  }
}
