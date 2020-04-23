import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app-routing.module";
import { FormularioRegistroComponent } from "./formulario-registro/formulario-registro.component";
import { DeclaracionComponent } from "./declaracion/declaracion.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AgGridModule } from "ag-grid-angular";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule, ReactiveFormsModule, FontAwesomeModule, AgGridModule.withComponents([])],
  declarations: [
    AppComponent,
    HelloComponent,
    FormularioRegistroComponent,
    DeclaracionComponent
  ],
  entryComponents: [
    FormularioRegistroComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
