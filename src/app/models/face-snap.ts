export class FaceSnapClass{

    location ?: string;
    constructor(public urlImage : string, 
                public title: string, 
                public description: string,
                public createdDate: Date,
                public snapsNumber: number){}

    addSnap(): void{
        this.snapsNumber ++;
    }

    removeSnap(): void{
        this.snapsNumber --;
    }

    setLocation(location : string) :void {
        this.location = location;
    }

    // creation de la methode withLocation pour la mention de la location dans le services
    // nous remplisons la variable location et retournons l'objet a jour
    withLocation(location: string): FaceSnapClass{
        this.setLocation(location)
        return this;
    }
}