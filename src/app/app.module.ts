import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainpageComponent} from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import {AgGridModule} from 'ag-grid-angular';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
