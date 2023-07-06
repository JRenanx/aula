import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { FormsModule } from '@angular/forms';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    ImcComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    PipesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
