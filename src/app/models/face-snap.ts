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
}