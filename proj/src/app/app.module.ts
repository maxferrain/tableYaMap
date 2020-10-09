import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularYandexMapsModule, IConfig } from 'angular8-yandex-maps';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import {DxButtonModule, DxDataGridModule, DxTemplateModule} from 'devextreme-angular';
import {ReactiveFormsModule} from '@angular/forms';
import { TableDataComponent } from './table-data/table-data.component';
import { YandexMapsComponent } from './yandex-maps/yandex-maps.component';


const mapConfig: IConfig = {
  apikey: 'e4f18379-ddee-4c30-b562-283dde2bd8e8',
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    TableDataComponent,
    YandexMapsComponent
  ],
  imports: [
    BrowserModule,
    AngularYandexMapsModule.forRoot(mapConfig),
    DxDataGridModule,
    DxTemplateModule,
    ReactiveFormsModule,
    DxButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


