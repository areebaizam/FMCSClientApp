import { Component } from '@angular/core';
import { MenuNode } from '@tap/shared/models/common/common.model';
import { CoreService } from '@tap/core/services/core.service';
import { headerMenuList as nodeList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  nodes: Array<MenuNode> = nodeList;
  constructor(private coreService: CoreService) {}

  emitBtnIconEvent(node: MenuNode, $event: Event) {
    this.coreService.handleNodeEvents(node, $event);
  }
}
