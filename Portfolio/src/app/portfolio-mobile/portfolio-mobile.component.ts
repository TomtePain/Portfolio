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

        if (entry.isIntersecting) {
          this.addClass(firstLeft, firstRight, secondRight)
          return; 
        }
        this.removeClass(firstLeft, firstRight, secondRight);
      });
    });
    observer.observe(anchor);
  }


  addClass(firstLeft:any, firstRight:any, secondRight:any) {
    return firstLeft.classList.add('slide-in-left'),
    firstRight.classList.add('slide-in-right'),
    secondRight.classList.add('slide-in-right');
  }

  removeClass(firstLeft:any, firstRight:any, secondRight:any) {
    return firstLeft.classList.remove('slide-in-left'),
    firstRight.classList.remove('slide-in-right'),
    secondRight.classList.remove('slide-in-right');
  }

}
