export class Tienda{
    idStore: number;
    nameStore: string;
    locationStore: string;
    urlImage: number;
    nameImage: number;

    constructor(
        idStore: number,
    nameStore: string,
    locationStore: string,
    urlImage: number,
    nameImage: number,
    ){
        this.idStore=idStore;
        this.nameStore=nameStore;
        this.locationStore=locationStore;
        this.urlImage=urlImage;
        this.nameImage=nameImage;
    }
}

