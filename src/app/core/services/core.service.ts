import { Injectable } from '@angular/core';
import { Subject, throttleTime } from 'rxjs';

import { MenuNode } from '@tap/shared/models/common/common.model';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public menuBtnClicked$ = new Subject();

  constructor() {}

  handleNodeEvents(node: MenuNode, $event: Event) {
    switch (node.name) {
      case 'menu':
        this.menuBtnClicked$.next(node.name);
        break;
      default:
        break;
    }
  }
}
