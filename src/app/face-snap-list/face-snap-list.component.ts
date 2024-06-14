import { Component } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {
  constructor(private FaceSnapService : FaceSnapsService){}
  faceSnapList !: FaceSnapClass[]
  ngOnInit(): void {
    this.faceSnapList = this.FaceSnapService.getFaceSnapList();
    
    this.faceSnapList[0].setLocation('terrain de la 7ème grande guerre ninja');
  }
}
