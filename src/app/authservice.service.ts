import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private _loginurl = "http://localhost:3300/user/login";
  
  constructor(private http : HttpClient) { }
  
  login(user:any)
  {
    console.log(user);
return this.http.post<any>(this._loginurl,user);
}
}
