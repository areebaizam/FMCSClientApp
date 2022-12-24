import { PipeTransform, Pipe } from '@angular/core';

// HTML Usage
// <ng-container *ngFor="let item of items | filterBoolean:'visible'">
@Pipe({ name: 'filterBoolean', standalone: true })
export class FilterBooleanPipe implements PipeTransform {
  transform(items: any[] | undefined, field: string, value: boolean): any[] {
    if (!items) return [];
    return items.filter((it) => it[field] == value);
  }
}
