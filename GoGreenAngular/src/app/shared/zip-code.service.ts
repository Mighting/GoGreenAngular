import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ZipCode} from "./models/zip-code";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ZipCodeService {

  constructor(private client: HttpClient) { }
  readonly uri = 'http://10.108.146.1:8080/API/Zipcode';

  getZipcode(){
    return this.client.get(this.uri).pipe(map((data: ZipCode[]) => {
      return data;
    }));
  }
}
