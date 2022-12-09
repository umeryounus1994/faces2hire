import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { LookuplistService } from '../services/lookuplist.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employerdashboard',
  templateUrl: './employerdashboard.component.html',
  styleUrls: ['./employerdashboard.component.css']
})
export class EmployerdashboardComponent implements OnInit {
  employeweblinkdata :any;
  employeuserdata : any;
  constructor(private route:Router, private http: HttpClient, private lookupdata:LookuplistService,private userdata:UserService)
  {
    this.lookupdata.lookupdata().subscribe((lookupdata)=>{

      this.employeweblinkdata = lookupdata;
      
        });

this.userdata.userdata().subscribe((userdata)=>{
    this.employeuserdata = userdata;
});


  }
  
  
  
  ngOnInit(): void {
    
  }
  message: boolean = false;
  onSubmit(employweblinks: any) {
    console.warn('employweblinks',employweblinks);
    this.http.post('http://localhost:3300/user/saveCompanyWebLinks',employweblinks).subscribe((result) => {
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
