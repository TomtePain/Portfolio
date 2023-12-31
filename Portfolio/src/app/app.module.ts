import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { FirstcontainerMobileComponent } from './firstcontainer-mobile/firstcontainer-mobile.component';
import { AboutMeMobileComponent } from './about-me-mobile/about-me-mobile.component';
import { SkillsMobileComponent } from './skills-mobile/skills-mobile.component';
import { PortfolioMobileComponent } from './portfolio-mobile/portfolio-mobile.component';
import { ContactMobileComponent } from './contact-mobile/contact-mobile.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuMobileComponent,
    FirstcontainerMobileComponent,
    AboutMeMobileComponent,
    SkillsMobileComponent,
    PortfolioMobileComponent,
    ContactMobileComponent,
    FooterComponent,
    ImprintComponent,
    DataProtectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
