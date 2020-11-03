import { Component } from '@angular/core';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  categorias: any = []

  constructor(
    private _categorias : CategoriasService
  ) {
    this._categorias.getCategorias().subscribe((resp:any) => {
      this.categorias  = resp.results
    }, (error) => {
      this.categorias = error 
    })
  }

}
