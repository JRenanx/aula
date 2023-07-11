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
import { MicroondasComponent } from './microondas/microondas.component';
import { PipesPipe } from './pipes.pipe';
import { InvertePipesPipe } from './inverte-pipes.pipe';
import { MdPaiFilhoModule } from './md-pai-filho/md-pai-filho.module';
import { MdFilhoPaiModule } from './md-filho-pai/md-filho-pai.module';
import { CpBComponent } from './md-service/service/cp-b/cp-b.component';
import { CpAComponent } from './md-service/service/cp-a/cp-a.component';
import { CpAgrupadorComponent } from './md-service/service/cp-agrupador/cp-agrupador.component';
import { MdAtvModuloModule } from './md-atv-modulo/md-atv-modulo.module';

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
    NavigationComponent,
    MicroondasComponent,
    PipesPipe,
    InvertePipesPipe,
    CpBComponent,
    CpAComponent,
    CpAgrupadorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MdPaiFilhoModule,
    MdFilhoPaiModule,
    MdAtvModuloModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
