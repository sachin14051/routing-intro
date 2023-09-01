import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoveComponent } from './shared/components/love/love.component';



import { SqrtPipe } from './shared/pipe/sqrt.pipe';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { FindPipe } from './shared/pipe/find.pipe';


import { appRoutingModule } from './app-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    LoveComponent,
    SqrtPipe,
    FilterPipe,
    FindPipe,

    

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
