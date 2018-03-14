import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gradosPipe'
})
export class GradosPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const grados = `${value} º`;
    return grados;
  }

}
