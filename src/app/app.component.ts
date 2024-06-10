import { Component } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapClass } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  url: string = "https://editors.dexerto.fr/wp-content/uploads/sites/2/2023/06/30/naruto-le-mangekyou-sharingan-madara-explique.jpg";
  title: string = "Madara";
  description : string = "Ninja le plus puissant du clan Uchiwa";
  createDate : Date = new Date();
  snapsNumber : number = 0;
  faceSnap1 !: FaceSnapClass;
  faceSnap2 !: FaceSnapClass;
  ngOnInit(): void {
    this.faceSnap1  = new FaceSnapClass('https://editors.dexerto.fr/wp-content/uploads/sites/2/2023/06/30/naruto-le-mangekyou-sharingan-madara-explique.jpg',
                                                'Madara',
                                                'Ninja le plus puissant du clan Uchiwa',
                                                new Date(),
                                                100);
    this.faceSnap1.setLocation('Terrain de la grande guere ninja');

    this.faceSnap2 = new FaceSnapClass('https://qph.cf2.quoracdn.net/main-qimg-14a9ccb4683ca5430b439b9109126e09-lq',
                                                'Hashirama',
                                                'Ninja le plus puissant du clan senju',
                                                new Date(),
                                                100);
  }


}
