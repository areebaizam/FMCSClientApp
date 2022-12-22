import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
//Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MenuNode } from '@tap/shared/models/common/common.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tap-btn-icon-col',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './btn-icon-col.component.html',
  styleUrls: ['./btn-icon-col.component.scss']
})
export class BtnIconColComponent {

  @Input() node: MenuNode = new MenuNode();
  @Output() emitBtnIconEvent = new EventEmitter<any>();

  // ngOnInit(): void {
  //   console.log('node',this.node);
  // }

  handleBtnClick($event: Event) {
    this.emitBtnIconEvent.emit($event);
  }

}
