import { Album } from '../album/album';

export class Foto {
    private id: number;
    private name: string;
    private album: Album;

    constructor(id: number, name: string, album: Album) {
      this.setId(id);
      this.setName(name);
      this.setAlbum(album);
    }

    public getId() {
        return this.id;
    }

    public setId(id: number) {
        return this.id = id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        return this.name = name;
    }

    public getAlbum() {
        return this.album;
    }

    public setAlbum(album: Album) {
        return this.album = album;
    }

}