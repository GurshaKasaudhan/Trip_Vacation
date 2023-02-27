import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowDivIf:boolean = true;   
  isShowDivIf1:boolean = false;   
  constructor() { }

  ngOnInit(): void {
this.toggleDisplayDivIf();
this.toggleDisplayDivIf1();
  }
  
     
  toggleDisplayDivIf() {  
    this.isShowDivIf = !this.isShowDivIf; 
    this.isShowDivIf1=!this.isShowDivIf; 
  }  

  toggleDisplayDivIf1() {  
    this.isShowDivIf1 = !this.isShowDivIf1; 
    this.isShowDivIf=!this.isShowDivIf1

  }  


}
