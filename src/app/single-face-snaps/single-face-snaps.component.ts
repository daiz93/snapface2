import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-single-face-snaps',
  templateUrl: './single-face-snaps.component.html',
  styleUrls: ['./single-face-snaps.component.scss']
})
export class SingleFaceSnapsComponent {

 
constructor(private facesnapService:FaceSnapsService,
  private route:ActivatedRoute)
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
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.facesnapService.getFaceSnapById(faceSnapId);
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

}
