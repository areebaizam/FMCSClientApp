import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Card } from '@tap/shared/models/common/common.model';

@Component({
  selector: 'tap-card-feature',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.scss'],
})
export class CardFeatureComponent {
  @Input() card: Card = new Card();
}
