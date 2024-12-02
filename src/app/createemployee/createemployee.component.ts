import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {
 constructor(private _employeeService:EmployeeService){}

 public employeeForm:FormGroup = new FormGroup(
  {name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormControl({
    addressLine: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    pincode: new FormControl(),
    })
  
 })
 add(){
  console.log(this.employeeForm);
  this._employeeService.createemployee(this.employeeForm.value).subscribe(
    (data:any) =>{
      alert(" created sucessfully");
    },
    (err:any) =>{
      alert("Creation Failed");
    }
  )
}

 }

