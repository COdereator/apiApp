import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{

  ngOnInit(): void {
    this.getDepartment();
  }

  deptObj:any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  }

  deptList:any = [];

  http = inject(HttpClient);

  onSave(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
      if(res.result){
        this.getDepartment();
        alert("Department Created Successfully")
      }
      else{
        alert(res.message);
      }
    })  
  }

  getDepartment(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result:any)=>{
      this.deptList = result.data
    })
  }

  onEdit(dept:any){ 
    this.deptObj = dept
  }

  onDelete(id:number){
    const isDelete = confirm('Are you sure you want to delete');
    if(isDelete){
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
        if(res.result){
          this.getDepartment();
          // alert("Department Deleted Successfully")
        }
        else{
          alert(res.message);
        }
      }) 
    }
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.deptObj).subscribe((res:any)=>{
      if(res.result){
        this.getDepartment();
        alert("Department Updated    Successfully")
      }
      else{
        alert(res.message);
      }
    })  
  }

}
