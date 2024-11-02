import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostApiComponent } from "./post-api/post-api.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, PostApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apiApp';

  userList:any =  [];
  userAddress:any = [];

  constructor(private http:HttpClient){
    this.getAllUser();
  }

  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList = result;
      console.log(this.userList);
    })
  }

  getAddress(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userAddress = result.address
      console.log("Hello",this.userAddress);
    })
  }
}
