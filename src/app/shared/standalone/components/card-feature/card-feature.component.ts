import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FeatureCard } from '@tap/shared/models/common/common.model';

@Component({
  selector: 'tap-card-feature',
  standalone: true,
  imports: [ MatCardModule],
  templateUrl: './card-feature.component.html',
  styleUrls: ['./card-feature.component.scss'],
})
export class CardFeatureComponent {
  @Input() card: FeatureCard = new FeatureCard();
}
