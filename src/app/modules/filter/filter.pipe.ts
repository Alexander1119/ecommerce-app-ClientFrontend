import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultTiendas = [];
    for (const tienda of value) {
      if (tienda.nameStore.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultTiendas.push(tienda);
      };
    };
    return resultTiendas;
  }

}
