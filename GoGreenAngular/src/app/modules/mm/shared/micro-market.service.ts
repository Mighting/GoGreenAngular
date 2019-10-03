import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MicroMarket} from "../../../shared/models/micro-market";

@Injectable({
  providedIn: 'root'
})
export class MicroMarketService {

  constructor(private client: HttpClient) {

  }

  readonly uri = 'http://10.108.146.1:8080/API/MicroMarket';

  postMicroMarket(mm: MicroMarket){
    console.log(mm);
    return this.client.post(this.uri, mm);
  }

  getZipcode(){
    return this.client.get('http://10.108.146.1:8080/API/Zipcode');
  }
}
