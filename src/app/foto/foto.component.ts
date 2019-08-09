import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album/album';
import  { FotoService } from './foto.service';
import  { AlbumService } from '../album/album.service';
import { Foto } from './foto';


@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {

  fotos: Foto[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fotoService: FotoService
  ) { }

  ngOnInit() {
    const idAlbum = +this.route.snapshot.paramMap.get('id');
    this.findFotosByIdAlbum(idAlbum);
  }

  goBack() {
    this.location.back();
  }

  findFotosByIdAlbum(idAlbum: number): void {
    this.fotoService.findFotosByIdAlbum(idAlbum)
    .subscribe(fotos => {
      console.log(fotos);
      this.fotos = fotos;
    });
  }

}
