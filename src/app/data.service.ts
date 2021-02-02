import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

 const api = "http://localhost:5555/"
//const api = "http://localhost:5001/api/users"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpclient:HttpClient) { }
saveData(data)
{
return this.httpclient.post<any>(api + "register",data);
}

loginData():Observable<any[]>
{
return this.httpclient.get<any[]>(api + "login");
}
}
