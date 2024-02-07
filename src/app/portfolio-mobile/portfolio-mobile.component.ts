import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-mobile',
  templateUrl: './portfolio-mobile.component.html',
  styleUrls: ['./portfolio-mobile.component.scss']
})
export class PortfolioMobileComponent implements OnInit {

  ngOnInit(): void {
    this.animation();
  }

  animation() {
    let anchor:any = document.querySelector('.portfolio-section');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        let firstLeft:any = entry.target.querySelector('.first-left');
        let firstRight:any = entry.target.querySelector('.first-right');
        let secondRight:any = entry.target.querySelector('.second-right');
        let secondLeft:any = entry.target.querySelector('.second-left');

        if (entry.isIntersecting) {
          this.addClass(firstLeft, firstRight, secondRight, secondLeft)
          return; 
        }
        this.removeClass(firstLeft, firstRight, secondRight, secondLeft);
      });
    });
    observer.observe(anchor);
  }


  addClass(firstLeft:any, firstRight:any, secondRight:any, secondLeft:any) {
    return firstLeft.classList.add('slide-in-left'),
    firstRight.classList.add('slide-in-right'),
    secondRight.classList.add('slide-in-right'),
    secondLeft.classList.add('slide-in-left');
  }

  removeClass(firstLeft:any, firstRight:any, secondRight:any, secondLeft:any) {
    return firstLeft.classList.remove('slide-in-left'),
    firstRight.classList.remove('slide-in-right'),
    secondRight.classList.remove('slide-in-right'),
    secondLeft.classList.remove('slide-in-left');
  }

}
