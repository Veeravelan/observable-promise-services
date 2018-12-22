import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  baseurl = environment.baseurl;
  option: any = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(public http: HttpClient) { }

  getStudent() {
    return this.http.get('http://10.16.1.19:8090/getAlien?id=2');
  }
  getLoginDetails(url: any) {
    return this.http.get(this.baseurl + url, this.option);
  }
}
