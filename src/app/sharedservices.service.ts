import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44394/api";
  readonly url ="https://localhost:44394/api/Country/get";
//  readonly PhotoUrl="http://localhost:65331/photos/";
readonly PhotoUrl="https://localhost:44394/Resources/Images";
  constructor(private http:HttpClient) { }
  getCountryList():Observable<any[]>{
    return this.http.get<any>(this.url);
  }
  addCountry(val:any){
    return this.http.post(this.APIUrl+'/Country/add',val)
  }
  
  DeleteCountry(val:any):Observable<any>{
    return this.http.delete(this.APIUrl+'/Country/delete/'+val)
  }
  getStateList(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/State/get/'+val);
  }
  addState(val:any){
    return this.http.post(this.APIUrl+'/State/add',val)
  }
  DeleteState(val:any){
    return this.http.delete(this.APIUrl+'/State/delete/'+val)
  }
  DeleteUsers(val:any){
    return this.http.delete(this.APIUrl+'/User/delete/'+val)
  }
  addUsers(val:any){
    return this.http.post(this.APIUrl+'/User/adduser',val)
  }
  updateUsers(val:any,val1:any){
    return this.http.put(this.APIUrl+'/User/updateuser/'+val,val1)
  } 
  getallUsers():Observable<any[]>{
  
    return this.http.get<any>(this.APIUrl+'/User/getall');
  } 
  getUsersbystate(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User/getbystate/'+val)
  } 
  getUsersbycountry(val:any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/User/getbycountry/'+val)
  } 
  uploadphoto(val:any){
    return this.http.post(this.APIUrl+'/User/save',val)
    
  }

  }

