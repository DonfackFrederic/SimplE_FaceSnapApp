import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe 
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceSnapComponent implements OnInit {


  constructor(private FaceSnapService: FaceSnapsService,
    private router: Router
    ){}

  @Input() faceSnapItemId!: string;
  faceSnapItem! : FaceSnapClass | undefined

  ngOnInit(): void {
    this.faceSnapItem = this.FaceSnapService.getSnapFaceById(this.faceSnapItemId)
  }

RedirectTo() {
 this.router.navigate(['FaceSnaps', this.faceSnapItem?.id])
} 
}
