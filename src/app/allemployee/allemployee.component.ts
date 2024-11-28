import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-allemployee',
  templateUrl: './allemployee.component.html',
  styleUrls: ['./allemployee.component.css']
})
export class AllemployeeComponent {

  employees:any =[];
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

}
