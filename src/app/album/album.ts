import { Foto } from '../foto/foto';

export class Album {

    private id: number;
    private userId: number;
    private title: string;

    constructor(id: number, userId: number, title: string) {
        this.setId(id);
        this.setUserId(userId);
        this.setTitle(title);
    }

    public setId(id: number) {
        this.id = id;
    }

    public setUserId(userId: number) {
        this.userId = userId;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getId() {
        return this.id;
    }

    public getUserId() {
        return this.userId;
    }

    public getTitle() {
        return this.title;
    }
    
}
