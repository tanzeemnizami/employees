import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor( private _http: HttpClient ) { }

  url = "http://localhost:3000/users";

  getData(){
    return this._http.get(this.url);
  }
  createUser(data:any){
    return this._http.post(this.url,data);
  }
  deleteUser(id:any){
    return this._http.delete(`${this.url}/${id}`);
  }
  fatchData(id:any){
    return this._http.get(`${this.url}/${id}`);
  }
  updateUser(id:any, data:any){
    return this._http.put(`${this.url}/${id}`,data);
  }
}
