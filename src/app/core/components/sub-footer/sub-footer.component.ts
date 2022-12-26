import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tap-sub-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.scss']
})
export class SubFooterComponent {
  footerText: string =
  '©2023 Fraserview Muslim Community Services . All rights reserved.';
}
