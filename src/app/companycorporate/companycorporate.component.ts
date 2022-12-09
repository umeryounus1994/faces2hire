import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-companycorporate',
  templateUrl: './companycorporate.component.html',
  styleUrls: ['./companycorporate.component.css']
})
export class CompanycorporateComponent implements OnInit {

  companycorporateuser:any




  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
  {
    this.userdata.userdata().subscribe((userdata)=>{
      this.companycorporateuser = userdata;
    });

  }
  
  
  ngOnInit(): void {
    
  }

  message: boolean = false;
  onSubmit(companycorporatedata: any) {
    console.warn('companycorporatedata',companycorporatedata);
    this.http.post('http://localhost:3300/user/saveCompanyCoorporate',companycorporatedata).subscribe((result) => {
      console.warn("result", result);
      this.message = true;
    });
  
  }
  removemessage() {
    this.message = false;
  
  }




}
