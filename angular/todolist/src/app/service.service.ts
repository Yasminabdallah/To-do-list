import { Injectable ,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';



const path: string = "http://127.0.0.1:8000/api"


@Injectable({
  providedIn: 'root'
})
export class ServiceService  {

  
  constructor( private http: HttpClient ) { }


  getData(endpoint: string): Observable<any> {
    return this.http.get(path + endpoint)
  }

  postData(url:string,data:object): Observable<any>{
    return this.http.post(path+url,data);
    }


  deleteData(url:string):Observable<any>{

    return this.http.delete(path+url);
   
  }
}
