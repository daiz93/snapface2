import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn:'root'
})
export class FaceSnapsService{


 mySnap = {
  id:1,
    title:'Desmond apprend Angular',
    description:'Ce premier cours vient de Open Class Room :-)', //Un texte aléatoire
    dateCreate: new Date(),
   snaps: 300,
   imageUrl: 'http://cdn.shopify.com/s/files/1/0614/5110/8583/products/gros-nounours-marron-jordi-galaxiepeluche.jpg?v=1643535769'
  ,localisation:'paris'
  };

    
  mySnap2 = {
    id:2,
    title:'Desmond apprend Angular',
    description:'Ce premier cours vient de Open Class Room :-)', //Un texte aléatoire
    dateCreate: new Date(),
   snaps: 100,
   imageUrl: 'https://m.media-amazon.com/images/I/6187-2xBIRL._AC_SS450_.jpg'
  };

  mySnap3 = {
    id:3,
    title:'Desmond apprend Angular',
    description:'Ce premier cours vient de Open Class Room :-)', //Un texte aléatoire
    dateCreate: new Date(),
   snaps: 250,
   imageUrl: 'https://m.media-amazon.com/images/I/51jUUJS1V7L._AC_SS450_.jpg'
   ,localisation:'cotonou'
  };
   
   mySnap4 = {
    id:4,
    title:'Desmond apprend Angular',
    description:'Ce premier cours vient de Open Class Room :-)', //Un texte aléatoire
    dateCreate: new Date(),
   snaps: 10,
   imageUrl: 'https://www.mailou-tradition.com/352-large_default/ours-en-peluche-l-ours-francais-50-cm-caramel.jpg'
  };


  SnapList = [
    this.mySnap,
    this.mySnap2,
    this.mySnap3,
    this.mySnap4
  ]


  getAllFaceSnaps() : FaceSnap[]
  {
    return this.SnapList;
  }

getFaceSnapById ( facenapId: number): FaceSnap
{
  const faceSnap = this.SnapList.find(faceSnap => faceSnap?.id ===  facenapId)
  if (!faceSnap)
  {
     
    throw new Error("Le facesnap n'existe pas.");
  }
  else
  {
    return faceSnap;
  }
  
}


  snapFaceSnapById( facenapId: number, snapType : string): void{
    
    
    //const faceSnap = this.SnapList.find(faceSnap => faceSnap?.id ===  facenapId);
  
    const faceSnap = this.getFaceSnapById(facenapId);

    snapType === "snap" ?  faceSnap.snaps ++ :  faceSnap.snaps --;
   


  }

/* 
  unsnapFaceSnapById( facenapId: number): void{
    const faceSnap = this.SnapList.find(faceSnap => faceSnap?.id ===  facenapId)
    if (faceSnap)
    {
      faceSnap.snaps --;

    }
    else{
      throw new Error("Le facesnap n'existe pas.");
    }

  } */

 
}