import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { CustomButtonConfig } from 'src/app-custom-library/app-common-interfaces/ButtonConfig';
import { Menu } from 'src/app-custom-library/app-common-interfaces/Menu';


@Component({
  selector: 'app-common-navbar',
  templateUrl: './common-navbar.component.html',
  styleUrls: ['./common-navbar.component.css'],
})
export class CommonNavbarComponent implements DoCheck {
  @Input() public isUserLogin: boolean = false;
  constructor() {

  }
  // public navMenu!: Array<Menu>;
  public navMenu: any;
  public buttonConfig: CustomButtonConfig = {
    buttonsGroup: [
      {
        buttonText: "Signup",
        buttonTextSize: 12,
        isHoverOn: true,
      },
      {
        buttonText: "Login",
        buttonTextSize: 12,
        isHoverOn: false,
      }
    ]
  }
  ngDoCheck(): void {
    // console.log(this.isUserLogin);

    let navMenu = localStorage.getItem('menu');
    if (navMenu) {
      navMenu = JSON.parse(navMenu)
      // console.log(navMenu);
      if (navMenu) {
        this.navMenu = navMenu
      }
    }
  }

  onLogout(){
    localStorage.clear()
  }

}
