import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './components/topo/topo.component';
import { ProgressoComponent } from './components/progresso/progresso.component';
import { TentativasComponent } from './components/tentativas/tentativas.component';
import { PainelComponent } from './components/painel/painel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ProgressoComponent,
    TentativasComponent,
    PainelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
