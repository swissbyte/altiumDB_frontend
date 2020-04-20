import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {TableComponent} from './table/table.component';


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
