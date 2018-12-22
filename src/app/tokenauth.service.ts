import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TokenauthService {
  baseurl = environment.baseurl;
  option: any = new HttpHeaders({ 'content-type': 'application/json' });
  constructor(public httpClient: HttpClient) { }

  getToken(): Promise<any> {
    return this.httpClient.get(this.baseurl + 'generateKeypair', this.option).toPromise().then(res => {
      return res;
    }).catch(err => err);
  }
}
