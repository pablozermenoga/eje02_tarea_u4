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
        id:0,
        description: ' JUEGO DE PELEAS DE LA INFANCIA',
        img: '',
        rank: "*****"
      },
      {
        name: 'FIFA 2019',
        id:1,
        description: ' JUEGO DE FUTBOL PARA CONSOLAS CON XBOX, PLAY STATION, ETC.',
        img:'',
        rank: " *****"
      }
    ];
  }

  ngOnInit() {
  }

}
