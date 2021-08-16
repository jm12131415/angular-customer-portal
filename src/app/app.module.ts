import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FooterItemComponent } from './layout/footer/footer-item/footer-item.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebarItemComponent } from './layout/sidebar/sidebar-item/sidebar-item.component';
import { AvatarComponent } from './shared/components/avatar/avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterItemComponent,
    SidebarComponent,
    SidebarItemComponent,
    AvatarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
