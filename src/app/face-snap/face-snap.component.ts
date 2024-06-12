import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceSnapComponent { 
  @Input() faceSnapItem!: FaceSnapClass;
  
  textButtonMessage: string = "Ajouter un snap";
  isSnapped: boolean = false;

  AddSnap() : string {
    this.faceSnapItem.addSnap();
    this.isSnapped = true;
    return "Snap Ajouté";
  }
  RemoveSnap(): string{
    this.faceSnapItem.removeSnap();
    this.isSnapped = false;
    return "Snap Retiré";
  }

  onSnap():void{
    if(this.isSnapped){
      this.textButtonMessage=this.RemoveSnap();
    }else{
      this.textButtonMessage= this.AddSnap();
    }
  }
}
