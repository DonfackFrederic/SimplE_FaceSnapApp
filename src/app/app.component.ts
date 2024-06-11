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
  faceSnapList !: FaceSnapClass[]
  ngOnInit(): void {
    this.faceSnapList = [
      new FaceSnapClass('https://editors.dexerto.fr/wp-content/uploads/sites/2/2023/06/30/naruto-le-mangekyou-sharingan-madara-explique.jpg',
                                                'Madara',
                                                'Ninja le plus puissant du clan Uchiwa',
                                                new Date(),
                                                100),
      new FaceSnapClass('https://qph.cf2.quoracdn.net/main-qimg-14a9ccb4683ca5430b439b9109126e09-lq',
                                                'Hashirama',
                                                'Ninja le plus puissant du clan senju',
                                                new Date(),
                                                100)
    ];
    
    this.faceSnapList[0].setLocation('terrain de la 7ème grande guerre ninja');
  }


}
