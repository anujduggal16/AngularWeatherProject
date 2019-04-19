import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms'
import{DataService} from './dataservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListitemComponent } from './listitem/listitem.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';

@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    HeaderComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
