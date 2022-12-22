import { Component, Input } from '@angular/core';
import { MenuNode } from '@tap/shared/models/common/common.model';
import { CoreService } from '@tap/core/services/core.service';
import { sidenavMenuList as nodeList } from '@tap/shared/models/common/app.data';

@Component({
  selector: 'tap-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() isSideNavOpen: boolean = false;
  nodes: Array<MenuNode> = nodeList;
  constructor(private coreService: CoreService) {}

  emitBtnIconRowEvent(node: MenuNode, $event: Event) {
    this.coreService.handleNodeEvents(node, $event);
  }
}
