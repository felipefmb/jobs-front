import { Foto } from './foto';
import ALBUNS from '../album/mock-album';

const FOTOS : Foto[] = [
    new Foto(1, "Foto 01", ALBUNS[0] ),
    new Foto(2, "Foto 02", ALBUNS[1] ),
    new Foto(3, "Foto 03", ALBUNS[2] ),
    new Foto(4, "Foto 04", ALBUNS[3] ),
    new Foto(5, "Foto 05", ALBUNS[4] )
]

export default FOTOS;