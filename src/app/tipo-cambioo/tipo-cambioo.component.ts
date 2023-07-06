import { Component, OnInit } from '@angular/core';
import { TipoCambioService } from './tipo-cambio.service';

@Component({
  selector: 'app-tipo-cambioo',
  templateUrl: './tipo-cambioo.component.html',
  styleUrls: ['./tipo-cambioo.component.css']
})
export class TipoCambiooComponent implements OnInit {

  monto: any;
  monedaOrigen: string;
  monedaDestino: string;
  montoConTipoCambio: number;
  tipoCambio: number;
  nuevoTipoCambio: any;
  datasource : any;
  buttonClicked : boolean;
  buttonClicked2 : boolean;
  isFormValid: boolean = false;
  showList: boolean = false;
  isFormValid2: boolean = false;
  list : any

  constructor(
    private tipoCambioService : TipoCambioService,
  ) { }

  ngOnInit(): void {
    this.buttonClicked = false
    this.isFormValid = this.monedaOrigen && this.monedaDestino && this.monto;
    this.addlist();
    this.getList();

  }
  validateForm() {
    this.isFormValid = this.monedaOrigen && this.monedaDestino && this.monto;
  }

  validateFormTab2() {
    this.isFormValid2 = this.monedaOrigen && this.monedaDestino && this.nuevoTipoCambio;
  }

  convertCurrency() {

    this.buttonClicked = true

    const jsonFactory = {
      monto : this.monto,
      monedaOrigen: this.monedaOrigen,
      monedaDestino: this.monedaDestino,
    }

    this.tipoCambioService.getChange(jsonFactory).subscribe(
      (data) => {
        console.log(data);
          this.datasource = data;
      }
    )
  }

  updateTypeChange() {

    this.buttonClicked2 = true

    const jsonFactory = {
      valorTipoCambio : this.nuevoTipoCambio,
      monedaOrigen: this.monedaOrigen,
      monedaDestino: this.monedaDestino,
    }

    this.tipoCambioService.updateTypeChange(jsonFactory).subscribe(
      (data) => {
        console.log(data);
          this.datasource = data;
          this.getList()
      }
    )
  }

  addlist(){
    this.tipoCambioService.addList().subscribe(
      (data) => {
      }) ;
    this.showList = true;
    this.getList()
  }

  addValueTolist(){

    const jsonFactory = {
      valorTipoCambio : this.nuevoTipoCambio,
      monedaOrigen: this.monedaOrigen,
      monedaDestino: this.monedaDestino,
    }

    this.tipoCambioService.addValueTolist(jsonFactory).subscribe(
      (data) => {
        this.getList()
      }) ;

  }

  getList(){
    this.tipoCambioService.getList().subscribe(
      (data) => {
        this.list = data
      }) ;
  }

  clear() {
    this.buttonClicked = false;

    this.monto = ""
    this.monedaOrigen = ""
    this.monedaDestino = ""
  }

  clear2() {
    this.buttonClicked = false;

    this.nuevoTipoCambio = ""
    this.monedaOrigen = ""
    this.monedaDestino = ""
  }

}
