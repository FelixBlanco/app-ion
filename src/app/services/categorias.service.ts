import { Injectable } from '@angular/core';
import { HttpClient } from '@angular//common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http : HttpClient
  ) { }

  getCategorias(){
    return this.http.get(`http://ec2-3-131-158-143.us-east-2.compute.amazonaws.com/todoservicio/api/v1/index.php/categories`);
  }
}
