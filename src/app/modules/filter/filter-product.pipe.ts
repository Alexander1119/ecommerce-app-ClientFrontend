import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultTiendas = [];
    for (const producto of value) {
      if (producto.name.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultTiendas.push(producto);
      };
    };
    return resultTiendas;
  }

}
