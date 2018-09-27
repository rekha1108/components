import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  cars = ['Ford','Chevrolet','ferrari','mercedes'];

  mydata(){
    return "This is my data";
  }
}
