import { Component, OnInit } from '@angular/core';
// import AOS from 'aos';

@Component({
  selector: 'app-why-huiospay',
  templateUrl: './why-huiospay.component.html',
  styleUrls: ['./why-huiospay.component.scss']
})
export class WhyHuiospayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // AOS.init({disable: 'mobile'});//AOS - 2
    // AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

}
