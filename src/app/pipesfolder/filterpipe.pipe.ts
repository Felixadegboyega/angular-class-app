import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    if(!args[0]) return value
    args[0] = args[0].toLowerCase()
    let filteredItems = value.filter(e=>e.toLowerCase().includes(args[0]))
    return filteredItems;
  }

}
