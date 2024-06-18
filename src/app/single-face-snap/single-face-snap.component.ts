import { CurrencyPipe, DatePipe, DecimalPipe, NgClass, NgStyle, PercentPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FaceSnapClass } from '../models/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    UpperCasePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleFaceSnapComponent implements OnInit { 

  constructor(private FaceSnapService: FaceSnapsService,
    private route : ActivatedRoute
    ){}

  faceSnapItemId!: string | null;
  faceSnapItem! : FaceSnapClass | undefined

  ngOnInit(): void {
    this.faceSnapItemId = this.route.snapshot.paramMap.get('id')
    console.log(this.faceSnapItemId)
    if(this.faceSnapItemId){
      this.faceSnapItem = this.FaceSnapService.getSnapFaceById(this.faceSnapItemId)
    }else{
      throw new Error('Erreur id non existant')
    }
    
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
    if(this.isSnapped && this.faceSnapItemId){
      this.textButtonMessage=this.RemoveSnap(this.faceSnapItemId);
    }else if(!this.isSnapped && this.faceSnapItemId){
      this.textButtonMessage= this.AddSnap(this.faceSnapItemId);
    }
  }
}
