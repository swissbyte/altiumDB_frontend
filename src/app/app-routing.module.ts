import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';


const routes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'test', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
