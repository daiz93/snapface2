import { Component , OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

import {FaceSnap} from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})


export class FaceSnapComponent  {

constructor(private facesnapService:FaceSnapsService, private route:Router)
{
  
}

@Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  dateCreate!: Date;
  snaps!:number;
  imageUrl!:string;
  snaped!:boolean;
  buttonText!:string;
  snipType!:'snap' |'unsnap';


  ngOnInit(){

    this.buttonText = 'Oh snap';
    this.snipType ='snap'
  }

  onAddSnap()
  {
    this.faceSnap.snaps ++;
    this.buttonText = 'Oups Snaped';
  }

  onUndoSnap()
  {
    this.faceSnap.snaps --;
    this.buttonText = 'Oh snap';
  }


  onSnaped()
  {
     
    if (this.buttonText === 'Oh snap')
    {
     // this.facesnapService.snapFaceSnapById(this.faceSnap.id)
      this.snipType ='snap';
    
    }
    else
    {

      var r=confirm("Voulez-vous supprimer votre snap ?");
      if (r===true)
      {
       // this.facesnapService.unsnapFaceSnapById(this.faceSnap.id);
       this.snipType = 'unsnap'
      }
 
     // alert("Voulez-vous supprimer votre snap ?"? this.onUndoSnap() :this.onAddSnap());
     this.facesnapService.snapFaceSnapById(this.faceSnap.id, this.snipType);
    }
    
  }

  onViewFaceSnap():void {
      this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }


}
