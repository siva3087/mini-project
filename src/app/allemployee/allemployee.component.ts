import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-allemployee',
  templateUrl: './allemployee.component.html',
  styleUrls: ['./allemployee.component.css']
})
export class AllemployeeComponent {

  employees:any =[];
  term:string ="";
  column:string ="";
  order:string ="";

  constructor(private _employeeService:EmployeeService){
    _employeeService.getemployees().subscribe(
      (data:any)=>{
        this.employees =data;
        console.log(this.employees)
      },
      (err:any)=>{
        alert("internal server error")
      }

    )
  }
  filter(){
    console.log(this.employees);
    this._employeeService.getFilteredemployees(this.term).subscribe(
      (data:any)=>{
        this.employees =data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  
  }
  sort(){
    console.log(this.employees);
    this._employeeService.getSortedemployees(this.column,this.order).subscribe(
      (data:any)=>{
        this.employees =data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }
  delete(id:string){
    console.log(this.employees);
    this._employeeService.deleteemployees(id).subscribe(
    (data:any)=>{
      alert("Delete SuccessFully ")
    },
    (err:any)=>{
      alert("internal Server Error")
    }
  )
  }
}
