import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service'; 
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-searchjobseeker',
  templateUrl: './searchjobseeker.component.html',
  styleUrls: ['./searchjobseeker.component.css']
})
export class SearchjobseekerComponent implements OnInit {
searchjobseeker:any;
skilldisplay:any;
constructor(private route:Router, private http: HttpClient, private userdata:UserService,private skilldata:SkillService)
{
this.userdata.userdata().subscribe((userdata)=>{

this.searchjobseeker = userdata;
});

this.skilldata.skilldata().subscribe((skilldata)=>{

  this.skilldisplay = skilldata;
  });


}

  ngOnInit(): void {
  
}
message: boolean = false;
onSubmit(searchjobseekers: any) {
  console.warn('searchjobseekers',searchjobseekers);
  this.http.post('http://localhost:3300/user/searchJobSeeker',searchjobseekers).subscribe((result) => {
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
