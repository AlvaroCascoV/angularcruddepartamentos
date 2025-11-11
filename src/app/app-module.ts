import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { DepartamentosComponent } from './components/departamentos-component/departamentos-component';
import { ServiceDepartamentos } from './service/service.departamentos';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create-component/create-component';

@NgModule({
  declarations: [App, MenuComponent, DepartamentosComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners(), ServiceDepartamentos],
  bootstrap: [App],
})
export class AppModule {}
