import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import  { FotoService } from './foto.service';
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
    this.findByIdAlbum(idAlbum);
    
  }

  goBack() {
    this.location.back();
  }
  
  findByIdAlbum(idAlbum: number) {
    this.fotoService.findByIdAlbum(idAlbum).subscribe(fotos => this.fotos = fotos);
  }


}
