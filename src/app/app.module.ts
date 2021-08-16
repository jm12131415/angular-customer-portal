import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AvatarComponent } from './common/avatar/avatar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { FooterItemComponent } from './footer/footer-item/footer-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AvatarComponent,
    SidebarItemComponent,
    FooterItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AvatarComponent],
})
export class AppModule {}
