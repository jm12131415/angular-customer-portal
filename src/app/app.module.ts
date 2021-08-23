import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { FooterComponent } from './layout/main-layout/footer/footer.component';
import { FooterItemComponent } from './layout/main-layout/footer/footer-item/footer-item.component';
import { HeaderComponent } from './layout/main-layout/header/header.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SidebarComponent } from './layout/main-layout/sidebar/sidebar.component';
import { SidebarItemComponent } from './layout/main-layout/sidebar/sidebar-item/sidebar-item.component';
import { AuthModule } from './modules/auth/auth.module';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { TextFieldComponent } from './shared/components/text-field/text-field.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    FooterItemComponent,
    SidebarComponent,
    SidebarItemComponent,
    AvatarComponent,
    TextFieldComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AuthModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
