import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario-registro",
  templateUrl: "./formulario-registro.component.html",
  styleUrls: ["./formulario-registro.component.scss"]
})
export class FormularioRegistroComponent implements OnInit {
  formulario: FormGroup;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.formulario = new FormGroup({
      codigo_factura: new FormControl("", [Validators.required]),
      fecha_emision: new FormControl("", [Validators.required]),
      nombres: new FormControl("", [Validators.required]),
      razon_social: new FormControl("", [Validators.required]),
      tipo_doc: new FormControl("", [Validators.required]),
      nro_doc: new FormControl("", [Validators.required]),
      direccion: new FormControl("", [Validators.required])
    });
  }

  public onSubmit(f) {
    debugger;
  }
}
