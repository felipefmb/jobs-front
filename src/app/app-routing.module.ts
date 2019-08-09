import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { FotoComponent } from './foto/foto.component';

const routes: Routes = [
  { path: '', redirectTo: 'albuns', pathMatch: 'full' },
  { path: ':id/fotos', component: FotoComponent },
  { path: 'albuns', component: AlbumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
