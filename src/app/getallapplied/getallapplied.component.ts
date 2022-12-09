import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service'; 

@Component({
  selector: 'app-getallapplied',
  templateUrl: './getallapplied.component.html',
  styleUrls: ['./getallapplied.component.css']
})
export class GetallappliedComponent implements OnInit {
applieddata:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
  {

    
    this.userdata.userdata().subscribe((userdata)=>{

      this.applieddata = userdata;
      });

  }

  ngOnInit(): void {
  
}

message: boolean = false;
onSubmit(appliedform: any) {
  console.warn('appliedform',appliedform);
  this.http.post('http://localhost:3300/job/getAllApplied',appliedform).subscribe((result) => {
    console.warn("result", result);
    this.message = true;
  });

}
removemessage() {
  this.message = false;

}
onlogout()
{
  localStorage.removeItem('token');
  this.route.navigate(['./']);
}
}
