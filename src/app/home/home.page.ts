import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {

  }
  hotdogs: Array<Object> = [
    {
      "imagem": "./assets/img/SimpleHotdog.jfif",
      "titulo": "Simple Hotdog",
      "preco": "R$3,00",
      "desc": "O classico Hotdog voltou!!!",
    },
    {
      "imagem": "./assets/img/hot wheels.jpg",
      "titulo": "Hot Wheels",
      "preco": "R$4,50",
      "desc": "para crianças que estão sem fome, coma com a imaginação!"

    },
    {
      "imagem": "./assets/img/Hotdog Gurmet.jpg",
      "titulo": "Hotdog Gourmet",
      "preco": "R$10,00",
      "desc": "O hotdog classico da casa, com tudo que tem direito!!!",

    }
  ];
    detalhes(nome, img, preco) {
    this.router.navigate(['/finalizar-pedido', nome, img, preco]);
  }
}
