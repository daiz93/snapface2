import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})
export class LandingPageComponentComponent implements OnInit {

  
  userEmail: string = "toto@gmail.com";
  userName!: string;

  constructor(private router:Router) { }

  
  ngOnInit(): void {
  }

  onContinue():void{
      this.router.navigateByUrl('facesnaps');
  }

  
  onSubmitForm(form: NgForm) {
    console.log(form.value);
  }

}
