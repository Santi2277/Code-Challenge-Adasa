import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { MapComponent } from './components/map/map.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {path: 'main', component: MainContentComponent},
  {path: 'table', component: TableComponent},
  {path: 'graphic', component: GraphicComponent},
  {path: 'map', component: MapComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
