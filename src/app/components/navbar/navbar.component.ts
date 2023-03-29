import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

isSubmenu: boolean = false;

 // Declare a variable to store the value of the switch case statement  
 public result: string = ''; 

  constructor() { }

  clickHandler(){
    console.log('click effect');
    
  }


  // Create a function to handle the switch case statement  
  public switchCase(value: number): void {

    console.log('from toggle', value);
    
    // Switch statement with cases  
    switch (value) {

      // Case 1  
      case 1: {

        this.result = 'Case 1';
        // console.log('result', this.result);
        

        break;

      }

      // Case 2  
      case 2: {

        this.result = 'Case 2';
        // console.log('result', this.result);


        break;

      }

       // Case 3  
       case 3: {

        this.result = 'Case 3';
        // console.log('result', this.result);


        break;

      }

      // Default Case  
      default: {

        this.result = 'Default Case';
        // console.log('result', this.result);

        break;

      }

    }    

  }  


  ngOnInit(): void {
  }

}
