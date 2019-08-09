import { Foto } from '../foto/foto';

export class Album {

    private id: number;
    private name: string;
    private fotos: Foto[] = [];

    constructor(id: number, name: string) {
        this.setId(id);
        this.setName(name);
    }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }

    getFotos() {
        return this.fotos;
    }
    
    setFotos(fotos: Foto[]) {
        this.fotos = fotos;
    }

}