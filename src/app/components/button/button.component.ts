import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    /**
   * author: Opemipo Alomaja
   * 
   * email: alomajaopemipo8@gmail.com
   * 
   * button inherits size from parent div. 
   * 
   * create div, and set width and height to generate dynamic buttons
   * 
   * pass function to buttonClick, sets value to true, and runs function
   * 
   */

  public buttonText = '';

	@Input()
	set text(name: string) {
		this.buttonText = name.toLocaleLowerCase();
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color: string = '0068B4';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;


  constructor() { }

  ngOnInit(): void {

    
  }

  onClick() {
		this.btnClick.emit();
	}

}
