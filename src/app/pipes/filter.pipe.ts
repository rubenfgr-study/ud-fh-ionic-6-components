import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], text: string = '', column: string = 'title'): any[] {
    console.log(value, text, column);
    if (!value) {
      return value;
    }

    if (!text) {
      return value;
    }

    return value.filter((v) =>
      v[column].toLowerCase().includes(text.toLowerCase())
    );
  }
}
