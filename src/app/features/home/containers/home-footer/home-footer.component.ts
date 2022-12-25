import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tap-home-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.scss'],
})
export class HomeFooterComponent {
  footerText: string =
    '©2023 Fraserview Muslim Community Services . All rights reserved.';
}
