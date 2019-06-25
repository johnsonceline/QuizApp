import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TotalProvider {
 grandTotal: number = 0;
  constructor(public http: HttpModule) {
    console.log('Hello TotalProvider Provider');
  }
  setTotal(value){
  return  this.grandTotal += value;
    
    
  }
  reset(){
    this.grandTotal = 0;
  }
  


  

}
