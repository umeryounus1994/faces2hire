import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { IndustrygetService } from '../services/industryget.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-jobseekerprofile',
  templateUrl: './jobseekerprofile.component.html',
  styleUrls: ['./jobseekerprofile.component.css']
})
export class JobseekerprofileComponent implements OnInit {

sendindustrydata:any;
senduserdata:any;
  constructor(private route:Router, private http: HttpClient,private industrydata:IndustrygetService,private userdata:UserService){

    this.industrydata.industrydata().subscribe((industrydata)=>{

      this.sendindustrydata = industrydata;
      });

      this.userdata.userdata().subscribe((userdata)=>{

        this.senduserdata = userdata;
        });

  }

public ngOnInit()
{

}


message: boolean = false;
onSubmit(jobseekerprofile: any) {
  console.warn('jobseekerprofile',jobseekerprofile);
  this.http.post('http://localhost:3300/user/saveJobSeekerProfileInfo',jobseekerprofile).subscribe((result) => {
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
