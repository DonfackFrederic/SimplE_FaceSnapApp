import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceSnapComponent { 
  @Input() faceSnap!: FaceSnapClass;
  
  textButtonMessage: string = "Ajouter un snap";
  isSnapped: boolean = false;

  AddSnap() : string {
    this.faceSnap.addSnap();
    this.isSnapped = true;
    return "Snap Ajouté";
  }
  RemoveSnap(): string{
    this.faceSnap.removeSnap();
    this.isSnapped = false;
    return "Snap Retiré";
  }

  onSnap():void{
    if(this.isSnapped){
      this.textButtonMessage=this.RemoveSnap();
    }else{
      if (!this.isSnapped){
        this.textButtonMessage= this.AddSnap();
      }
    }
  }
}
