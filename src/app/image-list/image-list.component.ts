import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  public images;

  constructor() { 
    this.images = [
      {
        name: 'THE KING OF FIGTHERS',
        description: ' JUEGO DE PELEAS DE LA INFANCIA',
        img: 'https://i.blogs.es/483a1e/a8ee94c79d513f7a94dc05fff2579869/450_1000.jpg',
        rank: "***"
      },
      {
        name: 'FIFA 2019',
        description: ' JUEGO DE FUTBOL PARA CONSOLAS CON XBOX, PLAY STATION, ETC.',
        img:'https://as00.epimg.net/meristation/imagenes/2019/02/11/noticias/1549866770_395456_1549866856_noticia_normal.jpg',
        rank: "*****"
      },
      {
        name: 'HALO 4',
        description: ' JUEGO DE BATALLAS CON ARMAS EN VARIOS ESCENARIOS',
        img:'https://images-na.ssl-images-amazon.com/images/I/51sy%2BOQUxaL._SY445_.jpg',
        rank: "*****"
      }
    ];
  }

  ngOnInit() {
  }

}
