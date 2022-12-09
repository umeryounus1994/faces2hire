import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { LookuplistService } from '../services/lookuplist.service';


@Component({
  selector: 'app-jobseekerdashboard',
  templateUrl: './jobseekerdashboard.component.html',
  styleUrls: ['./jobseekerdashboard.component.css']
})
export class JobseekerdashboardComponent implements OnInit {

jobseekerwebs : any;
constructor(private route:Router, private http: HttpClient, private lookupdata:LookuplistService){
  this.lookupdata.lookupdata().subscribe((lookupdata)=>{

this.jobseekerwebs = lookupdata;

  });
}
 ngOnInit(): void { 

  }
  
  message: boolean = false;
  onSubmit(jobseekerweblinks: any) {
    console.warn('jobseekerweblinks',jobseekerweblinks);
    this.http.post('http://localhost:3300/user/saveJobSeekerWebLinks',jobseekerweblinks).subscribe((result) => {
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
