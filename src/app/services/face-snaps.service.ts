import { Injectable } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private FaceSnapList : FaceSnapClass[] =[
    new FaceSnapClass('https://editors.dexerto.fr/wp-content/uploads/sites/2/2023/06/30/naruto-le-mangekyou-sharingan-madara-explique.jpg',
                                                'Madara',
                                                'Ninja le plus puissant du clan Uchiwa',
                                                new Date(),
                                                100).withLocation('Terrain de la 7ème grande guerre ninja'),

      new FaceSnapClass('https://qph.cf2.quoracdn.net/main-qimg-14a9ccb4683ca5430b439b9109126e09-lq',
                                                'Hashirama',
                                                'Ninja le plus puissant du clan senju',
                                                new Date(),
                                                100)
  ];

  getFaceSnapList(): FaceSnapClass[]{
    return this.FaceSnapList
  }
}
