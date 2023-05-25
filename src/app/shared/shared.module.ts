import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtomFooterComponent } from './footer/buttom-footer/buttom-footer.component';

@NgModule({
  declarations: [
    SharedComponent,
    TopMenuComponent,
    MainMenuComponent,
    CallToActionComponent,
    HeaderComponent,
    FooterComponent,
    ButtomFooterComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
