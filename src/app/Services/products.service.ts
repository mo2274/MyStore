import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _jsonURL = 'assets/data.json';
  constructor(private http: HttpClient) { }

  GetProducts() : Observable<Item[]> {
    return this.http.get<Item[]>(this._jsonURL);
  }
}
