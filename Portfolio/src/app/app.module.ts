import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FirstcontainerMobileComponent } from './firstcontainer-mobile/firstcontainer-mobile.component';
import { AboutMeMobileComponent } from './about-me-mobile/about-me-mobile.component';
import { SkillsMobileComponent } from './skills-mobile/skills-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuMobileComponent,
    FirstcontainerMobileComponent,
    AboutMeMobileComponent,
    SkillsMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
