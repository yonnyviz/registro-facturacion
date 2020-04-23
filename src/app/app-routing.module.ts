import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // CLI imports router
import { AppComponent } from "./app.component";
import { FormularioRegistroComponent } from "./formulario-registro/formulario-registro.component";
import { DeclaracionComponent } from "./declaracion/declaracion.component";

const routes: Routes = [
  {
    path: "",
    component: DeclaracionComponent
  },
  {
    path: "Factura",
    component: FormularioRegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
