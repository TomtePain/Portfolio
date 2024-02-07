import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-mobile',
  templateUrl: './skills-mobile.component.html',
  styleUrls: ['./skills-mobile.component.scss']
})
export class SkillsMobileComponent implements OnInit {

  ngOnInit(): void {
    this.animation();
  }




  animation() {
    let skills:any = document.querySelector('.skills-desktop');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const icon:any = entry.target.querySelector('.skill-icons-desktop');

        if (entry.isIntersecting) {
          icon.classList.add('icon-lines-desktop-animation');
          return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        icon.classList.remove('icon-lines-desktop-animation');
      });
    });

    observer.observe(skills);
  }
}
