import { Component } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
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
