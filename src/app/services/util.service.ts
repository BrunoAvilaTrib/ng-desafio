declare let window: any;

export class UtilService {

  public static almacenamiento: any = {
      windowObj: window,

      existeAlmacenamiento(tipo: any): boolean {
        try {
          return typeof this.windowObj[`${tipo}Storage`].getItem === 'function';
        } catch (e) {
          return false;
        }
      },

      crearAlmacenamiento(tipo: any): void {
        this.windowObj[`${tipo}Store`] = {};
      },

      obtenerElemento(tipo: any, clave: string | number): any {
        if (this.existeAlmacenamiento(tipo)) {
          return this.windowObj[`${tipo}Storage`].getItem(clave);
        } else {
          if (!this.windowObj[`${tipo}Store`]) {
            this.crearAlmacenamiento(tipo);
          }
          const valor = this.windowObj[`${tipo}Store`][clave];
          if (typeof valor === 'undefined') {
            return null;
          } else {
            return valor;
          }
        }
      },

      guardarElemento(tipo: any, clave: string | number, valor: any): void {
        if (this.existeAlmacenamiento(tipo)) {
          this.windowObj[`${tipo}Storage`].setItem(clave, valor);
        } else {
          if (!this.windowObj[`${tipo}Store`]) {
            this.crearAlmacenamiento(tipo);
          }
          this.windowObj[`${tipo}Store`][clave] = valor;
        }
      },

      eliminarElemento(tipo: any, clave: string | number): void {
        if (this.existeAlmacenamiento(tipo)) {
          this.windowObj[`${tipo}Storage`].removeItem(clave);
        } else {
          if (!this.windowObj[`${tipo}Store`]) {
            this.crearAlmacenamiento(tipo);
          }
          this.windowObj[`${tipo}Store`][clave] = null;
        }
      },

      limpiar(tipo: any): void {
        if (this.existeAlmacenamiento(tipo)) {
          this.windowObj[`${tipo}Storage`].clear();
        } else {
          if (!this.windowObj[`${tipo}Store`]) {
            this.crearAlmacenamiento(tipo);
          }
          this.windowObj[`${tipo}Store`] = {};
        }
      },
    };

}
