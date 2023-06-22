import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {

  removeCheck() {
    let checkbox:any = document.getElementById('checkForMenu');
    checkbox.checked = false;
  }
}
