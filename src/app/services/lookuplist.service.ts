import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookuplistService {

  url = "http://localhost:3300/lookup/listLookup";
  constructor(private http:HttpClient) { }
  lookupdata()
  {
return this.http.get(this.url);

  }
}
