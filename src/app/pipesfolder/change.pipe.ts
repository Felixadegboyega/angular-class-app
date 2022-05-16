import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let newV = value.toLowerCase()
    return newV;
  }

}
