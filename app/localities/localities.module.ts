import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms"
import { LocalitiesService } from '../core/services/localities.service.service';
import { AppLocalitiesComponent } from './components/localities/app-localities/app-localities.component';

@NgModule({
  declarations: [AppLocalitiesComponent],
  exports: [AppLocalitiesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LocalitiesService],
})
export class LocationModule { }