import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MenuNode } from '@tap/shared/models/common/common.model';


@Component({
  selector: 'tap-btn-icon-row',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './btn-icon-row.component.html',
  styleUrls: ['./btn-icon-row.component.scss'],
})
export class BtnIconRowComponent {

  @Input() node: MenuNode = new MenuNode();
  @Output() emitBtnIconEvent = new EventEmitter<any>();

  handleBtnClick($event: Event) {
    this.emitBtnIconEvent.emit($event);
  }
}
