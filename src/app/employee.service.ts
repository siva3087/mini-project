import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) {}
    getemployees():Observable<any> {
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
    }
    createemployee(data:any):Observable<any>{
      return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
    }
    getFilteredemployees(term:string):Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?name="+term);

    }
    getSortedemployees(column:string,order:string):Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?soryBy="+column+"&order="+order)
    }
    deleteemployees(id:string):Observable<any>{
      return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees"+id);
    }
    
}
