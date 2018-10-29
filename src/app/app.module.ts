import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomecompComponent } from './homecomp/homecomp.component';
import {DataTableModule, ButtonModule, InputTextModule, 
  DialogModule, MenubarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HomecompComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,TableModule,
    BrowserAnimationsModule,
    DataTableModule,
    ButtonModule,DialogModule,
    InputTextModule,MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
