import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MapComponent } from './components/map/map.component';
import { TableComponent } from './components/table/table.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    HeaderComponent,
    MainContentComponent,
    MapComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
