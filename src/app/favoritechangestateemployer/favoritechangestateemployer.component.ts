import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-favoritechangestateemployer',
  templateUrl: './favoritechangestateemployer.component.html',
  styleUrls: ['./favoritechangestateemployer.component.css']
})
export class FavoritechangestateemployerComponent {
  empchangestate:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
{
  this.userdata.userdata().subscribe((userdata)=>{

    this.empchangestate = userdata;
    });
    
}
  ngOnInit(): void {
  
}


message: boolean = false;
onSubmit(employeesendchangedata: any) {
  console.warn('employeesendchangedata',employeesendchangedata);
  this.http.post('http://localhost:3300/favorite/changestatus',employeesendchangedata).subscribe((result) => {
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
