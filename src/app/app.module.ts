import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './shared/navigation/navigation.module';
import { PagesModule } from './pages/pages.module';
import { MenuSidebarModule } from './shared/menu-sidebar/menu-sidebar.module';
import { ClientRoutingModule } from './pages/clients/clients-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationModule,
    PagesModule,
    MenuSidebarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
