import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {


  ngOnInit(): void {
    this.newWay();
  }

  newWay() {
    let anchor: any = document.getElementById('data');
    
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

}
