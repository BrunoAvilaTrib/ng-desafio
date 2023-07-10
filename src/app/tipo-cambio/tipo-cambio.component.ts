import { Component, OnInit } from '@angular/core';
import { TipoCambioService } from './tipo-cambio.service';
import { UtilService } from '../services/util.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-tipo-cambioo',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css'],

})
export class TipoCambioComponent implements OnInit {

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
    private router: Router,

  ) { }

  ngOnInit(): void {

    // this.addlist();
    this.getList();
    this.buttonClicked = false
    this.isFormValid = this.monedaOrigen && this.monedaDestino && this.monto;


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

  // addlist(){
  //   this.tipoCambioService.addList().subscribe(
  //     (data) => {
  //       this.getList()
  //     }) ;
  //   this.showList = true;

  // }

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

  logout(){
    UtilService.almacenamiento.limpiar('session');
    this.router.navigate(['/login']);
  }

}
