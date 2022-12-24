import { Component, Input } from '@angular/core';
//Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FeatureCard } from '@tap/shared/models/common/common.model';
import { CardFeatureComponent } from '../card-feature/card-feature.component';

@Component({
  selector: 'tap-card-volunteer',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CardFeatureComponent],
  templateUrl: './card-volunteer.component.html',
  styleUrls: ['./card-volunteer.component.scss'],
})
export class CardVolunteerComponent {
  @Input() card: FeatureCard = new FeatureCard();
}
