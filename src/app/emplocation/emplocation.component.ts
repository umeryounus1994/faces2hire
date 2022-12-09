import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';

import { UserService } from '../services/user.service';
@Component({
  selector: 'app-emplocation',
  templateUrl: './emplocation.component.html',
  styleUrls: ['./emplocation.component.css']
})
export class EmplocationComponent implements OnInit {
emplocationdatasend:any
constructor(private route:Router, private http: HttpClient, private userdata:UserService)
{
  this.userdata.userdata().subscribe((userdata)=>{
    this.emplocationdatasend = userdata;
});
}
  ngOnInit(): void {
}

message: boolean = false;
onSubmit(emplocation: any) {
  console.warn('emplocation',emplocation);
  this.http.post('http://localhost:3300/empLocation/addEmpLocation',emplocation).subscribe((result) => {
    console.warn("result", result);
    this.message = true;
  });

}
removemessage() {
  this.message = false;

}






}
