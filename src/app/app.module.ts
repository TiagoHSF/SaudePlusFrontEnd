import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioSaudeComponent } from './inicio-saude/inicio-saude.component';
import { ImcComponent } from './imc/imc.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSaudeComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }