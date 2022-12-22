import { Component } from '@angular/core';
import { MenuNode } from '@tap/shared/models/common/common.model';
import { footerMenuList as nodeList } from '@tap/shared/models/common/app.data';
import { CoreService } from '@tap/core/services/core.service';

@Component({
  selector: 'tap-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  nodes: Array<MenuNode> = nodeList;
  constructor(private coreService: CoreService) {}

  emitBtnIconEvent(node: MenuNode, $event: Event) {
    this.coreService.handleNodeEvents(node, $event);
  }
}
