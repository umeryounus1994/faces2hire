import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employeeaddfavorite',
  templateUrl: './employeeaddfavorite.component.html',
  styleUrls: ['./employeeaddfavorite.component.css']
})
export class EmployeeaddfavoriteComponent implements OnInit {
empaddfavt:any;
  constructor(private route:Router, private http: HttpClient, private userdata:UserService)
{
  this.userdata.userdata().subscribe((userdata)=>{

    this.empaddfavt = userdata;
    });

}
  ngOnInit(): void {
  
}

message: boolean = false;
onSubmit(employeeaddfavorite: any) {
  console.warn('employeeaddfavorite',employeeaddfavorite);
  this.http.post('http://localhost:3300/favorite/addFavorite',employeeaddfavorite).subscribe((result) => {
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
