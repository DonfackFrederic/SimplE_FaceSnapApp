import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaceSnapComponent implements OnInit { 

  constructor(private FaceSnapService: FaceSnapsService){}

  @Input() faceSnapItemId!: string;
  faceSnapItem! : FaceSnapClass | undefined

  ngOnInit(): void {
    this.faceSnapItem = this.FaceSnapService.getSnapFaceById(this.faceSnapItemId)
  }
  
  textButtonMessage: string = "Ajouter un snap";
  isSnapped: boolean = false;

  AddSnap(id:string) : string {
    this.FaceSnapService.SnapOperation(id, 'addSnap')
    this.isSnapped = true;
    return "Snap Ajouté";
  }
  RemoveSnap(id : string): string{
    this.FaceSnapService.SnapOperation(id, 'removeSnap');
    this.isSnapped = false;
    return "Snap Retiré";
  }

  onSnap():void{
    if(this.isSnapped){
      this.textButtonMessage=this.RemoveSnap(this.faceSnapItemId);
    }else{
      this.textButtonMessage= this.AddSnap(this.faceSnapItemId);
    }
  }
}
