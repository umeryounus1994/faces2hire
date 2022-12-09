import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { LookuplistService } from '../services/lookuplist.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-aboutcompany',
  templateUrl: './aboutcompany.component.html',
  styleUrls: ['./aboutcompany.component.css']
})
export class AboutcompanyComponent implements OnInit {
aboutcompanylookupdata : any;
aboutcompanyuserdata : any;
constructor(private route:Router, private http: HttpClient, private lookupdata:LookuplistService,private userdata:UserService)
{

  this.lookupdata.lookupdata().subscribe((lookupdata)=>{

    this.aboutcompanylookupdata = lookupdata;
    
      });

this.userdata.userdata().subscribe((userdata)=>{
  this.aboutcompanyuserdata = userdata;
});

}


  ngOnInit(): void {
  
}


message: boolean = false;
onSubmit(aboutcompany: any) {
  console.warn('aboutcompany',aboutcompany);
  this.http.post('http://localhost:3300/user/saveCompanyWebLinks',aboutcompany).subscribe((result) => {
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
