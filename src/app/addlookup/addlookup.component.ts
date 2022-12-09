import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-addlookup',
  templateUrl: './addlookup.component.html',
  styleUrls: ['./addlookup.component.css']
})
export class AddlookupComponent implements OnInit {
  senduserdata:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService){

    this.userdata.userdata().subscribe((userdata)=>{

      this.senduserdata = userdata;

  });
}
  ngOnInit(): void { 

  }
  message: boolean = false;
  onSubmit(lookupaddition: any) {
    console.warn('lookupaddition',lookupaddition);
    this.http.post('http://localhost:3300/lookup/addLookup',lookupaddition).subscribe((result) => {
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
