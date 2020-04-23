import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FormularioRegistroComponent } from "../formulario-registro/formulario-registro.component";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-declaracion",
  templateUrl: "./declaracion.component.html",
  styleUrls: ["./declaracion.component.scss"]
})
export class DeclaracionComponent implements OnInit {
  listadoFacturas: Array<any>;
  totalFacturacion: number;
  cantidadFacturas: number;
  responsable: string;
  iconEdit = faEdit;
  iconDelete = faTrashAlt;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.listadoFacturas = this.mostrarListadoDeFacturas();
    this.totalFacturacion = this.mostrarTotalFacturacion(this.listadoFacturas);
    this.cantidadFacturas = this.listadoFacturas.length;
    this.responsable = "Yonny Vizcaya";
  }

  agregarFactura() {
    this.modalService.open(FormularioRegistroComponent, { scrollable: true });
  }

  mostrarListadoDeFacturas(): Array<any> {
    return [
      {
        tipo: "Boleta",
        numero: "001",
        razon_social: null,
        nombres_apellidos: "Jose Luis Ramirez",
        tipo_ID: "CarnetExtranjería",
        numero_ID: "001323443",
        total: 12.52
      },
      {
        tipo: "Factura",
        numero: "021",
        razon_social: null,
        nombres_apellidos: "Jose Luis Ramirez",
        tipo_ID: "CarnetExtranjería",
        numero_ID: "001323443",
        total: 22.8
      },
      {
        tipo: "Factura",
        numero: "021",
        razon_social: null,
        nombres_apellidos: "Jose Luis Ramirez",
        tipo_ID: "CarnetExtranjería",
        numero_ID: "001323443",
        total: 120.8
      },
      {
        tipo: "Factura",
        numero: "021",
        razon_social: null,
        nombres_apellidos: "Jose Luis Ramirez",
        tipo_ID: "CarnetExtranjería",
        numero_ID: "001323443",
        total: 20.84
      }
    ];
  }

  mostrarTotalFacturacion(listadoFacturas: Array<any>): number {
    let calculation = 0;
    for (const factura of listadoFacturas) {
      calculation += factura.total;
    }
    return calculation;
  }
}
