import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { ImcComponent } from './imc/imc.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { CpPaiComponent } from './md-pai-filho/cp-pai/cp-pai.component';
import { CpPaiComponent as CpPaiComponent2 } from './md-filho-pai/cp-pai/cp-pai.component';
import { CpAgrupadorComponent } from './md-service/service/cp-agrupador/cp-agrupador.component';
import { CpTelaComponent } from './md-atv-modulo/cp-tela/cp-tela.component';



const routes: Routes = [
  { path: "bindings", component: ExemploBindingComponent },
  { path: "imc", component: ImcComponent },
  { path: "Ng-class", component: NgClassComponent },
  { path: "ng-style", component: NgStyleComponent },
  { path: "ng-model", component: NgModelComponent },
  { path: "ng-ff", component: NgIfComponent },
  { path: "ng-For", component: NgForComponent },
  { path: "ng-switch", component: NgSwitchComponent },
  { path: "pipes", component: PipesComponent },
  { path: "Microondas", component: MicroondasComponent },
  { path: "pai-Filho", component: CpPaiComponent },
  { path: "filho-Pai", component: CpPaiComponent2 },
  { path: "agrupador", component: CpAgrupadorComponent },
  { path: "cp-table", component: CpTelaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
